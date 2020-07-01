export default function randFloat(decimal = 0) {
  return Number(
    Math.random().toFixed(decimal)
  );
}
