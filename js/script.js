// file data menu
// $.getJSON('/data/foodanddrink.json', function(response) {
//   let menu = response.menu

//   $.each(menu, (index, data) => {
//     $('#menu-list').append(`
//       <div class="col-6 col-md-4">
//         <div class="card mb-3">
//           <img src="img/`+ data.image +`" class="card-img-top" alt="`+ data.category +`" id="img-cursor">
//           <a href="#" class="add-cart cart">Add Cart</a>
//           <div class="card-body">
//             <h5 class="card-title">`+ data.name +`</h5>
//             <span class="prices">Rp. `+ data.price +`</span>
//           </div>
//         </div>
//       </div>
//     `)
//   })
// })

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

// ADD CART
let carts = document.querySelectorAll('.add-cart')

let product = [
  {
    category: "Drink",
    name: 'Espresso',
    tag: 'img1.png',
    price: 10000,
    inCart: 0
  },
  {
    category: "Drink",
    name: 'Coffe Latte',
    tag: 'img2.png',
    price: 15000,
    inCart: 0
  },
  {
    category: "Drink",
    name: 'Cappucino',
    tag: 'img3.png',
    price: 5000,
    inCart: 0
  },
  {
    category: "Drink",
    name: 'Red Velvet Latte',
    tag: 'img4.png',
    price: 33000,
    inCart: 0
  },
  {
    category: "Food",
    name: 'Choco Rhum',
    tag: 'img5.png',
    price: 28000,
    inCart: 0
  },
  {
    category: "Food",
    name: 'Black Forest',
    tag: 'img6.png',
    price: 30000,
    inCart: 0
  },
  {
    category: "Food",
    name: 'Chicken Katsu Dabu-dabu',
    tag: 'img7.png',
    price: 60000,
    inCart: 0
  },
  {
    category: "Food",
    name: 'Salmon Truffle Teriyaki',
    tag: 'img8.png',
    price: 60000,
    inCart: 0
  },
  {
    category: "Food",
    name: 'Wiener Schnitzel',
    tag: 'img9.png',
    price: 69000,
    inCart: 0
  }
]

for (let i=0; i<carts.length; i++) {
  carts[i].addEventListener('click', () => {
    numbersCart(product[i])
    totalRupiah(product[i])
  })
}

function loadNumberCart() {
  let productNumber = localStorage.getItem('numbersCart')

  if ( productNumber ) {
    document.querySelector('span.index-item').textContent = productNumber;
  }
}

const numbersCart = (product) => {

  let productNumber = localStorage.getItem('numbersCart')
  productNumber = parseInt(productNumber) // konversi to integer

  if ( productNumber ) {
    localStorage.setItem('numbersCart', productNumber + 1)
    document.querySelector('span.index-item').textContent = productNumber + 1
  } else {
    localStorage.setItem('numbersCart', 1)
    document.querySelector('span.index-item').textContent = 1
  }

  setItems(product)
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)
  if ( cartItems != null ) {
    if ( cartItems[product.tag] == undefined ) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  } else {
    product.inCart = 1
    cartItems = {
      [product.tag]: product
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(cartItems))
}

function totalRupiah(product) {

  // localStorage.setItem("totalRupiah", product.price)

  let price = localStorage.getItem('totalRupiah')

  // console.log(price)
  // console.log(typeof price)

  if (price != null) {
    const costRp = price.split('').join('')
    const count = Number(costRp)

    localStorage.setItem("totalRupiah", count + product.price)
    // console.log("Jumlah : ",count)
  } else {
    localStorage.setItem("totalRupiah", product.price)
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

      Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="containter-cart">
        <div class="row">
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
            <span class="total-items">Rp. `+item.inCart * item.price+`</span>
          </div>
        </div>
      </div>
      `
    })

    totalItems.innerHTML += `
    <section class="buy-items" id="buy-items">
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
        <button type="submit" class="btn btn-primary mb-2" id="btn-cancel-cart">Cancel</button>
        </div>
      </div>
    </section>
    `
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

// klik button chart
const btnCheckuot = document.getElementById('btn-checkout')
const btnCancleCart = document.getElementById('btn-cancel-cart')

btnCheckuot.addEventListener('click', ()=> {
  alert('Payment Success')
})

btnCancleCart.addEventListener('click', () => {
  alert('Payment cancle')
})