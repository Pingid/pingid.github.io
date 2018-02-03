export function vect(a, b) { return { x: a, y: b } };
export function dist(vectA, vectB) { return Math.sqrt(Math.pow((vectA.x - vectB.x), 2) + Math.pow((vectA.y - vectB.y), 2)) }
export function mapValues(value, fromA, toA, fromB, toB) { return fromB + (value / ( fromA - toA )) * ( fromB - toB ) }
export function getDir(vec) { return Math.atan2(vec.y, vec.x) }
export function angleBetween(vecA, vecB) { return Math.atan2(vecA.y - vecB.y, vecA.x - vecB.x) }

// Shollow compare two objects;
export function equals(objA, objB) {
  var result = true;
  for (var keyA in objA) {
    if (objB[keyA] === undefined || objA[keyA] !== objB[keyA]) { result = false }
  }
  for (var keyB in objB) {
    if (objA[keyB] === undefined || objA[keyB] !== objB[keyB]) { result = false }
  }
  return result;
}
