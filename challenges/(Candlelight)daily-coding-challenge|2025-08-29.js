function burnCandles(candles, leftoversNeeded) {
  let totalBurned = 0;
  let leftovers = 0;
  while (candles > 0) {
    totalBurned += candles;
    leftovers += candles;
    candles = Math.floor(leftovers / leftoversNeeded);
    leftovers = leftovers % leftoversNeeded;
  }
  return totalBurned;
}
console.log(burnCandles(7, 2));
