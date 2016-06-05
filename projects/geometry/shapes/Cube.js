function Cube(origin, size, context) {
  var self = this;
  self.origin = origin;
  self.rotation = [0,0,0];
  self.size = size;
  self.squareRadius = Math.ceil(Math.pow((size/2)*(size/2)+(size/2)*(size/2), 0.5));
  self.cubeRadius = Math.ceil(Math.pow(self.squareRadius*self.squareRadius+(size/2)*(size/2), 0.5));

  this.generatePoints = function(){
    self.points = [
      {X: self.origin[0]-self.size/2, Y: self.origin[1]-self.size/2, Z: self.origin[2]-self.size/2},
      {X: self.origin[0]-self.size/2, Y: self.origin[1]-self.size/2, Z: self.origin[2]+self.size/2},
      {X: self.origin[0]-self.size/2, Y: self.origin[1]+self.size/2, Z: self.origin[2]-self.size/2},
      {X: self.origin[0]-self.size/2, Y: self.origin[1]+self.size/2, Z: self.origin[2]+self.size/2},
      {X: self.origin[0]+self.size/2, Y: self.origin[1]-self.size/2, Z: self.origin[2]-self.size/2},
      {X: self.origin[0]+self.size/2, Y: self.origin[1]-self.size/2, Z: self.origin[2]+self.size/2},
      {X: self.origin[0]+self.size/2, Y: self.origin[1]+self.size/2, Z: self.origin[2]-self.size/2},
      {X: self.origin[0]+self.size/2, Y: self.origin[1]+self.size/2, Z: self.origin[2]+self.size/2}
    ];
  };
  this.generateFaces = function(){
    self.faces = [
      [0, 1, 3, 2],
      [4, 5, 7, 6],
      [1, 3, 7, 5],
      [2, 0, 4, 6],
      [0, 1, 5, 4],
      [3, 2, 6, 7],
    ]
  };
  this.generateLines = function(){
    self.lines = [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0],
      [4, 5],
      [5, 7],
      [7, 6],
      [6, 4],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];
  };
  this.rotate = function(axes, theta){
    var sinTheta = Math.sin(theta);
    var cosTheta = Math.cos(theta);
    self.points = self.points.map(function(point){
      var x = point.X;
      var y = point.Y;
      var z = point.Z;
      if(axes === 'x'){
        return {X: x, Y: y * cosTheta - z * sinTheta, Z: z * cosTheta + y * sinTheta};
      }else if(axes === 'y'){
        return {X: x * cosTheta - z * sinTheta, Y: y, Z: z * cosTheta + x * sinTheta};
      }else if(axes === 'z'){
        return {X: x * cosTheta - y * sinTheta, Y: y * cosTheta + x * sinTheta, Z: z};
      }
    });
  };
  this.updateRotation = function(){
    this.rotate('x', self.rotation[0]);
    this.rotate('y', self.rotation[1]);
    this.rotate('z', self.rotation[2]);
  };
  this.resize = function(amount) {
    for(var i in self.points){
      var x = self.points[i].X;
      var y = self.points[i].Y;
      var z = self.points[i].Z;

      x < 0 ? self.points[i].X -= amount : self.points[i].X += amount;
      y < 0 ? self.points[i].Y -= amount : self.points[i].Y += amount;
      z < 0 ? self.points[i].Z -= amount : self.points[i].Z += amount;
    }
  };
  this.drawFaces = function() {
    function drawFace(nodes) {
      context.beginPath();
      context.moveTo(nodes[0].X, nodes[0].Y)
      for(var i = 1; i < nodes.length; i++) {
        context.lineTo(nodes[i].X, nodes[i].Y)
      }
      context.lineWidth = 1;
      context.strokeStyle = 'black';
      context.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      context.stroke();
      context.fill();
    }
    var faces = self.faces.map(function(face) {
      return face.map(function(node) {
        return self.points[node];
      })
    })
    var sortFaces = faces.sort(function(a, b) {
      var i = a.map(function(x) { return x.Z }).reduce(function(n, m) { return n + m });
      var j = b.map(function(x) { return x.Z }).reduce(function(n, m) { return n + m });
      return i - j;
    })
    for(var i in self.faces){
      drawFace(sortFaces[i])
    }
  };
  this.drawLines = function(){
    for(var i in self.lines){
      context.beginPath();
      context.moveTo(self.points[self.lines[i][0]].X, self.points[self.lines[i][0]].Y);
      context.lineTo(self.points[self.lines[i][1]].X, self.points[self.lines[i][1]].Y);
      context.lineWidth = 1;
      context.strokeStyle = 'white';
      context.stroke();
    }
  };
  this.update = function(){
    this.generatePoints();
    this.updateRotation();
    this.generateLines();
    this.drawLines();
  };
}
