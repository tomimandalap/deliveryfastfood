// klik button navbar
$(document).ready(function() {
  $("#sidebarCollapse").on('click',function() {
    $("#side-left").toggleClass('active')
    $("#main").toggleClass('setting')
  })
})

$(document).ready(function() {
  $("#cart-btn").on('click',function() {
    $("#side-right").toggleClass('active')
  })
})

// klik add items plus
const open = document.getElementById('btn-plus')
const modal_container = document.getElementById('modal_container') 
const close = document.getElementById('btn-cancel')
const add = document.getElementById('btn-add')

open.addEventListener('click', function() {
  modal_container.classList.add('show')
})

close.addEventListener('click', function() {
  modal_container.classList.remove('show')
})

add.addEventListener('click', function() {
  alert('Success')
})

// file data menu
$.getJSON('/data/foodanddrink.json', function(response) {
  let menu = response.menu

  $.each(menu, (index, data) => {
    $('#menu-list').append(`
      <div class="col-6 col-md-4">
        <div class="card mb-3">
          <img src="img/`+ data.tag +`" class="card-img-top" alt="`+ data.category +`" id="img-cursor"></img>
          <a href="index.html" class="add-cart cart"><i class="far fa-check-circle"></i></a>
          <div class="card-body">
            <h5 class="card-title">`+ data.name +`</h5>
            <span class="prices">Rp. `+ data.price +`</span>
          </div>
        </div>
      </div>
    `)
  })

  // ADD CART
  let carts = document.querySelectorAll('.add-cart')

  for (let i=0; i<carts.length; i++) {
    carts[i].addEventListener('click', () => {
      numbersCart(menu[i])
      totalRupiah(menu[i])
    })
  }

})

function loadNumberCart() {
  let productNumber = localStorage.getItem('numbersCart')

  if ( productNumber ) {
    document.querySelector('span.index-item').textContent = productNumber;
  }
}

const numbersCart = (menu) => {

  let productNumber = localStorage.getItem('numbersCart')
  productNumber = parseInt(productNumber) // konversi to integer

  if ( productNumber ) {
    localStorage.setItem('numbersCart', productNumber + 1)
    document.querySelector('span.index-item').textContent = productNumber + 1
  } else {
    localStorage.setItem('numbersCart', 1)
    document.querySelector('span.index-item').textContent = 1
  }

  setItems(menu)
}

function setItems(menu) {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  if ( cartItems != null ) {
    if ( cartItems[menu.tag] == undefined ) {
      cartItems = {
        ...cartItems,
        [menu.tag]: menu
      }
    }
    cartItems[menu.tag].inCart += 1
  } else {
    menu.inCart = 1
    cartItems = {
      [menu.tag]: menu
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalRupiah(menu) {

  // localStorage.setItem("totalRupiah", menu.price)

  let price = localStorage.getItem('totalRupiah')

  // console.log(price)
  // console.log(typeof price)

  if (price != null) {
    const costRp = price.split('.').join('')
    console.log(costRp)
    const count = Number(costRp)
    // console.log(count)

    localStorage.setItem("totalRupiah", count + (Number(menu.price)*1000))
    // console.log("Jumlah : ",count)
  } else {
    localStorage.setItem("totalRupiah", Number(menu.price)*1000)
    // console.log(price)
  }
}

// display aside right
function displayCart() {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  let productContainer = document.querySelector(".containter-cart")
  let totalItems = document.querySelector('.buy-items')
  let total = localStorage.getItem('totalRupiah')

  // console.log(cartItems)

  if ( cartItems && productContainer ) {

    productContainer.innerHTML = ''
    totalItems.innerHTML = ''
    
      // CONTEN CART
      Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="row mt-2">
        <div class="col-4">
          <img src="img/`+item.tag+`" alt="`+item.category+`" id="img-cart">
        </div>

        <div class="col-4">
          <h3 class="title-cart">`+item.name+`</h3>
          <a class="btn-min" href="#" role="button"><i class="fas fa-minus"></i></a>
          <span class="cart-items">`+item.inCart+`</span>
          <a class="btn-plus" href="#" role="button"><i class="fas fa-plus"></i></a>
        </div>

        <div class="col-4">
          <span class="total-items">Rp. `+item.inCart * item.price *1000 +`</span>
        </div>
      </div>
      `
    })
    
    // total Cart
    totalItems.innerHTML += `
    <div class="row">
      <div class="col-6">
        <h3 class="buy-total">Total:</h3>
      </div>
      <div class="col-6">
        <span class="total-price">Rp. `+ total +`*</span>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
      <p class="no-ppn">*Belum termasuk ppn</p>
      </div>
      <div class="col-12">
      <button type="submit" class="btn btn-primary mb-2" id="btn-checkout">Checkout</button>
      </div>
      <div class="col-12">
      <a class="btn btn-primary mb-2" href="index.html" role="button" id="btn-cancel-cart">Cancel</a>
      
    </div>
    `
    // <button type="submit" class="btn btn-primary mb-2" id="btn-cancel-cart">Cancel</button>
  } 
  else {
    productContainer.innerHTML += `
    <img class="image" src="img/food-and-restaurant.png" alt="image-empity">
    <h3 class="menu-cart" id="menu_cart">Your cart is empty</h3>
    <p class="menu-add">Please add some items from the menu</p>
    `
  }
}

loadNumberCart()
displayCart()

// box checkout list item
function checkOutList() {

  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  let total = localStorage.getItem('totalRupiah')
  // ppn 10%
  const ppn = parseInt(total)*0.1
  // console.log(ppn)
  const sumTotal = parseInt(total)+ppn
  // console.log(sumTotal)


  let titleCheckOut = document.querySelector(".title-checkout")
  let listCheckOut = document.querySelector(".list-checkout")
  let payCheckOut = document.querySelector(".pay-checkout")

  if ( cartItems && listCheckOut ) {

    titleCheckOut.innerHTML = ''
    listCheckOut.innerHTML = ''
    payCheckOut.innerHTML=''

    titleCheckOut.innerHTML +=`
    <div class="row">
      <div class="col-6">
        <p class="text-boxCheckOut">Checkout</p>
      </div>
      <div class="col-6">
        <p class="text-receipt">Receipt no: #010410919</p>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <h5 class="name-cashier">Cashier: <span class="names">Pevita Pearce</span></h5>
      </div>
    </div>
    `

    Object.values(cartItems).map(item => {
      listCheckOut.innerHTML += `
      <div class="row">
        <div class="col-6">
          <h4 class="title-check-items">`+item.name+`</h4>
        </div>
        <div class="col-2">
        <span class="cart-items">x`+item.inCart+`</span>
        </div>
        <div class="col-4">
        <span class="total-check-items">Rp. `+item.inCart * item.price *1000 +`</span>
        </div>
      </div>
      `
    })

    payCheckOut.innerHTML += `
    <div class="row">
      <div class="col-8">
        <p class="text-ppn">Ppn 10%</p>
      </div>
      <div class="col-4">
      <span class="total-check-items">Rp. `+ ppn +`</span>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <p class="p-total">Total: <span class="total-pay">Rp. `+ sumTotal +`</span></p>
      </div>

      <div class="col-12">
        <p class="payment">Payment: Cash</p>
      </div>
    </div>

    <!-- button form -->
      <button type="submit" class="btn btn-danger mb-2" id="btn-print">Print</button>
      <br><span class="text-or">Or</span><br>
      <button type="submit" class="btn btn-info mb-2" id="btn-sendEmail">Send Email</button>
    <!-- button form  end-->
    `
  }

  // button box-checkout
  const boxCheckOut = document.getElementById('container-checkout')
  const btnPrint = document.getElementById('btn-print')
  const btnEmail = document.getElementById('btn-sendEmail')

  btnPrint.addEventListener('click', () => {
    boxCheckOut.classList.remove('popup')
  })

  btnEmail.addEventListener('click', () => {
    boxCheckOut.classList.remove('popup')
  })
}

// button checkout
let btnCheckOut = document.getElementById('btn-checkout')
let boxCheckOut = document.getElementById('container-checkout')
let totalItems = document.querySelector('.buy-items')
let btnCancel = document.getElementById('btn-cancel-cart')

btnCheckOut.addEventListener('click', () => {
  boxCheckOut.classList.add('popup')
  checkOutList()
})

btnCancel.addEventListener('click', () => {

  localStorage.setItem('totalRupiah', 0)
  localStorage.setItem('numbersCart', 0)
  localStorage.setItem('productsInCart', null)

})