function generateInnerSponge(outer, number, exc) {
  var cubes = [];
  for (i = - Math.floor(number / 2); i < Math.ceil(number / 2); i ++) {
    for (j = - Math.floor(number / 2); j < Math.ceil(number / 2); j ++) {
      for (k = - Math.floor(number / 2); k < Math.ceil(number / 2); k ++) {
        var sum = Math.abs(i) + Math.abs(j) + Math.abs(k)
        if (sum < exc) {
          var cube = new Cube([i * outer.size/number - outer.origin[0], j * outer.size/number - outer.origin[1], k * outer.size/number - outer.origin[2]], outer.size/number, ctx)
          cubes.push(cube);
        }
      }
    }
  }
  return cubes;
}
