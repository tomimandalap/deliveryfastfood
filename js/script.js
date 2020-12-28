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

$(document).ready(function() {
  $('#add-items').on('click', function() {
    
  })
})