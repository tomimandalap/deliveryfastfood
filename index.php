<?php
$data = file_get_contents('data/foodanddrink.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];
?>

<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

  <!-- fontawesome -->
  <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />

  <!-- css ekternal -->
  <link rel="stylesheet" href="css/style.css">

  <title>Home</title>
</head>

<body>
  <!-- header -->
  <nav class="navbar">
    <a class="navbar-brand" id="show-menu" href="#"><i class="fas fa-bars"></i></a>
    <div class="container justify-content-start">
      <a class="home" href="">Food Items</a>
    </div>
    <div class="container justify-content-center">
      <a class="search" href=""><i class="fas fa-search"></i></a>
    </div>
    <div class="container justify-content-end">
      <a href="" class="cart" id="cart">Cart <i class="fas fa-bags-shopping"> 0</i></a>
    </div>
  </nav>

  <div class="container-menu">
    <aside class="left">
      <ul class="list-menu">
        <li><a class="menu-item1" href=""><i class="fas fa-utensils"></i></a></li>
        <li><a class="menu-item2" href=""><i class="far fa-clipboard"></i></a></li>
        <li><a class="menu-item3" href=""><i class="fas fa-plus"></i></a></li>
      </ul>
    </aside>

    <section class="main">
      <div class="row">

        <?php foreach ($menu as $row) : ?>
          <div class="col-12 col-md-4">
            <div class="card" style="width: 15rem;">
              <img src="img/<?php echo $row["image"]; ?>" class="card-img-top" alt="Espresso">
              <div class="card-body">
                <h5 class="card-title"><?php echo $row["name"]; ?></h5>
                <span class="prices"><?php echo $row["price"]; ?></span>
              </div>
            </div>
          </div>
        <?php endforeach; ?>

      </div>
    </section>

    <aside class="right">
      <img class="image" src="img/food-and-restaurant.png" alt="image-empity">
      <h3 class="menu-cart" id="menu-cart">Your cart is empty</h3>
      <p class="menu-add">Please add some items from the menu</p>
    </aside>
  </div>

  <footer>
    Copyright &copy; 2020 Tomi Mandala Putra
    <a class="github" href="https://github.com/tomimandalap">
      <i class="fab fa-github"></i>
    </a>
    <a class="youtube" href="https://youtube.com/Duino_Elektronik">
      <i class="fab fa-youtube"></i>
    </a>
  </footer>

  <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

  <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    -->
</body>

</html>