$.getJSON('/data/foodanddrink.json', function(response) {
  let menu = response.menu

  $.each(menu, (index, data) => {
    $('#menu-list').append(`
      <div class="col-6 col-md-4">
        <div class="card mb-3">
          <img src="img/`+ data.image +`" class="card-img-top" alt="`+ data.category +`" id="img-cursor">
          <div class="card-body">
            <h5 class="card-title">`+ data.name +`</h5>
            <span class="prices">Rp. `+ data.price +`</span>
          </div>
        </div>
      </div>
    `)
  })
})

// klik button
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

// klik add items
const open = document.getElementById('btn-plus')
const modal_container = document.getElementById('modal_container') 
const close = document.getElementById('btn-cancel')

open.addEventListener('click', function() {
  modal_container.classList.add('show')
})

close.addEventListener('click', function() {
  modal_container.classList.remove('show')
})

