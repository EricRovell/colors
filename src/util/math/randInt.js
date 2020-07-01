export default function randInt(min, max) {
  // if max not provided, range is [0, min]
  if (!max) {
    [ min, max ] = [ 0, min ]
  }

  return Math.floor(
    Math.random() * (max - min) + min
  );
}
