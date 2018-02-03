function Foot(settings) {
  this.position = settings.position;
  this.maxLife = settings.life;
  this.life = settings.life;
  this.foot = settings.foot
  this.age = 0;
  this.draw = settings.draw || function() { return null };

  this.handleLifeSpan = function() {
    if (this.life > 0) { this.life -= 1; }
    else { this.life = 0 }
    this.age += 1;
  }
  this.update = function() {
    this.handleLifeSpan();
    this.draw(this.position, this.life, this.maxLife, this.foot);
  }
}

export default Foot;
