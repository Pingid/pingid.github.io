function Tetrahedron(origin, size,  ctx) {
  var self = this;
  this.origin = origin;
  this.size = size;
  this.rotation = [0, 0, 0]
  this.points = [];
  this.lines = [];
  function angle(deg) { return deg/180 * Math.PI }

  this.generatePoints = function(){
    self.points = [
      {
        X: self.origin[0] - self.size * Math.cos(angle(30)),
        Y: self.origin[1] + self.size * Math.sin(angle(30)),
        Z: self.origin[2] + self.size * Math.sin(angle(30)),
      },
      {
        X: self.origin[0],
        Y: self.origin[1] - self.size,
        Z: self.origin[2]
      },
      {
        X: self.origin[0] + self.size * Math.cos(angle(30)),
        Y: self.origin[1] + self.size * Math.sin(angle(30)),
        Z: self.origin[2] + self.size * Math.sin(angle(30)),
      },
      {
        X: self.origin[0],
        Y: self.origin[1] + self.size * Math.sin(angle(30)),
        Z: self.origin[2] - self.size * Math.sin(angle(30)),
      },
    ];
  };

  this.generateLines = function(){
    self.lines = [
      [self.points[0], self.points[1]],
      [self.points[1], self.points[2]],
      [self.points[2], self.points[0]],
      [self.points[0], self.points[3]],
      [self.points[1], self.points[3]],
      [self.points[2], self.points[3]],
    ];
  };

  this.rotate = function(axes, theta){
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    self.points = self.points.map(function(point){
      var x = point.X;
      var y = point.Y;
      var z = point.Z;
      if (axes === 'x') {
        return {
          X: x,
          Y: y * cosTheta - z * sinTheta,
          Z: z * cosTheta + y * sinTheta
        };
      } else if (axes === 'y') {
        return {
          X: x * cosTheta - z * sinTheta,
          Y: y,
          Z: z * cosTheta + x * sinTheta
        };
      } else if (axes === 'z') {
        return {
          X: x * cosTheta - y * sinTheta,
          Y: y * cosTheta + x * sinTheta,
          Z: z
        };
      }
    });
  };

  this.updateRotation = function(){
    this.rotate('x', self.rotation[0]);
    this.rotate('y', self.rotation[1]);
    this.rotate('z', self.rotation[2]);
  };

  this.draw = function(){
    for(var i in self.lines){
      ctx.beginPath();
      ctx.moveTo(self.lines[i][0].X, self.lines[i][0].Y);
      ctx.lineTo(self.lines[i][1].X, self.lines[i][1].Y);
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
  };

  this.update = function(){
    this.generatePoints();
    this.updateRotation();
    this.generateLines();
    this.draw();
  };
}
