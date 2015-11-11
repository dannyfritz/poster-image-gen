<!DOCTYPE html>
<html>
<head>
  <style>
  div {
    background-image: url({{photo}});
    background-size: cover;
    width: 500px;
    height: 500px;
    border: solid 1px green;
    display: -webkit-box;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }
  div > * {
    color: white;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
  }
  </style>
</head>
<body>
  <div>
    <h1>{{message}}</h1>
  </div>
  <script>
  document.querySelector('img').onload(function () {
    phantom.exit()
  })
  </script>
</body>
</html>
