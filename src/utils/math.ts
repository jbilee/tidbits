export function getRandomValue(range: number, offset = 0, magnitude = 0) {
  return Math.floor((Math.random() + magnitude) * range) + offset;
}
