import { dist, vect, equals, angleBetween } from '../utils/math';
import Foot from './Foot';

function Walker(settings) {
  this.speed = settings.speed;
  this.gap = settings.gap;
  this.footSteps = [ new Foot({ position: vect(0, 0), life: 100 }) ];
  this.destination = settings.destination || vect(0, 0);
  this.generateStep = settings.generateStep;

  this.step = function() {
    var secondToLast = this.footSteps[this.footSteps.length - 2] || new Foot({ position: this.destination, life: 100 });
    var lastStep = this.footSteps[this.footSteps.length - 1] || new Foot({ position: this.destination, life: 100 });
    if (lastStep.age > this.speed) {
      var direction = angleBetween(this.destination, lastStep.position);
      var nextFootPosition = vect(lastStep.position.x + Math.cos(direction) * this.gap, lastStep.position.y + Math.sin(direction) * this.gap)
      var footKind = this.footSteps.length % 2 === 0 ? 'left' : 'right';
      if (dist(lastStep.position, this.destination) > this.gap) {
        this.footSteps = [].concat(this.footSteps, [
          this.generateStep(nextFootPosition, direction, footKind)
        ]);
      }
      else if (!equals(lastStep.position, secondToLast.position)) {
        this.footSteps = [].concat(this.footSteps, [
          this.generateStep(lastStep.position, direction, footKind)
        ]);
      }
    }
  }

  this.update = function() {
    this.step();
    this.footSteps.forEach(function(foot) { return foot.update() });
  }
}

export default Walker;
