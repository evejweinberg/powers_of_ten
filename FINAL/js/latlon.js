function toWebMercatorY(latitude) {
  var rad = latitude * 0.0174532;
  var fsin = Math.sin(rad);

  var y = 6378137 / 2.0 * Math.log((1.0 + fsin) / (1.0 - fsin));

  return y;
}

function toWebMercatorX(longitude) {
  var x = longitude * 0.017453292519943 * 6378137;

  return x;
}
