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