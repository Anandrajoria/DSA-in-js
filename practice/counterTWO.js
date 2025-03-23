var createCounter = function (init) {
  let res = init;
  let obj= {
    increment: function () {
       res++;
       return (res);
       
    },
    reset: function () {
       res=init;
       return (res);
       
    },
    decrement: function () {
      return --res;
    },
  };
  return obj
};
// const counter = createCounter(0);
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.reset());

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
