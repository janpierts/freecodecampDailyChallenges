function decode(s) {
  let stack = [];

  for (let char of s) {
    if (char === ')') {
      let temp = '';
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        temp += stack.pop();
      }

      stack.pop();

      for (let c of temp) {
        stack.push(c);
      }
    } else {
      stack.push(char);
    }
  }
  return stack.join('');
}

console.log(decode("(f(b(dc)e)a)"));
console.log(decode("((is?)(a(t d)h)e(n y( uo)r)aC)"));
console.log(decode("f(Ce(re))o((e(aC)m)d)p"));
