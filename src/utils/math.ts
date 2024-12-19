export function getRandomValue(range: number, offset = 0, magnitude = 0) {
  return Math.floor((Math.random() + magnitude) * range) + offset;
}

export function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
