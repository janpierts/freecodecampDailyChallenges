function tribonacciSequence(startSequence, length) {
  if (length === 0) return [];

  if (length <= 3) {
    return startSequence.slice(0, length);
  }

  let result = [...startSequence];

  for (let i = 3; i < length; i++) {
    let nextElement = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextElement);
  }

  return result;
}
