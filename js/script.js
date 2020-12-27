$.getJSON('/data/foodanddrink.json', function(response) {
  let menu = response.menu

  $.each(menu, (index, data) => {
    $('#menu-list').append(`
      <div class="col-6 col-md-4">
        <div class="card mb-3">
          <img src="img/`+ data.image +`" class="card-img-top" alt="`+ data.category +`">
          <div class="card-body">
            <h5 class="card-title">`+ data.name +`</h5>
            <span class="prices">Rp. `+ data.price +`</span>
          </div>
        </div>
      </div>
    `)
  })
})

// var 	bilangan = 10000;
		
// var	reverse = bilangan.toString().split('').reverse().join(''),
// 	ribuan 	= reverse.match(/\d{1,3}/g);
// 	ribuan	= ribuan.join('.').split('').reverse().join('');

// // Cetak hasil	
// console.log(ribuan)