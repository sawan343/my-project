console.log("chestIndia")
const sym1 =  Symbol("p")
const sym2 =  Symbol("p")


//const str = "myname";
//str.map(r=>console.log(r))
const strings = ["10", "10", "10"];
const numbers = strings.map(parseInt);

console.log(numbers);

function *gen () {
    const promiseValue = yield new Promise((resolve) =>  setTimeout(() => resolve("myname"), 1000 )  );
    console.log(promiseValue);
}

// .. and at some other context using '*gen'

const iterator = gen();
const { value: promise } = iterator.next(); // Promise (42)

promise.then((resolvedValue) => iterator.next(resolvedValue)); // logs 42


async function foo() {
    return 1;
  }
console.log(foo().then(r => console.log(r)));


const p = new Promise((res, rej) => {
    res(1);
  });
  
  async function asyncReturn() {
    return p;
  }
  
  function basicReturn() {
    return Promise.resolve(p);
  }
  console.log('***p', p);
  console.log('***basicReturn', basicReturn());

  console.log(p === basicReturn()); // true
  console.log(p === asyncReturn()); // false

  async function awaitReturn() {
    await "Testing********";
    
  }
  console.log('***p console.log( awaitReturn())');
  const resultAwaitReturn = () => {
     awaitReturn()
  }
  console.log( resultAwaitReturn());

