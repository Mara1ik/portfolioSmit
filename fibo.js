let n = 0;
while (n < 1) n = prompt("Введите число больше либо равное единице");

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fib(n));
