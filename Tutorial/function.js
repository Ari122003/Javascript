const sum1 = (a, b) => {
  return a + b;
};

console.log("The sum is", sum1(3, 7));

function sum2(a, b) {
  console.log("The sum is", a + b);
}

sum2(7, 8);

const sum3 = () => {
  let a = 5;
  let b = 7;
  return a + b;
};

console.log("The sum is", sum3());

const sum4 = () => {
  let a = 4;
  let b = 7;
  console.log("The sum is", a + b);
};

sum4();
