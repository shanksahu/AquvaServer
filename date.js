var time = new Date();
console.log(
    time.toLocaleString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' })
);  


// const first = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'second')
//   })
//   //race me vo phle aayega sirf vo hi execute hooga
//   Promise.race([first, second]).then(result => {
//     console.log(result) // second
//   })
  

//   const first = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'first')
//   })
//   const second = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'second')
//   })
  
//   Promise.any([first, second]).catch(error => {
//     console.log(error) // AggregateError
//   })


const promiseToDoSomething = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I did something'), 10000)
    })
  }
  
  const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
  }
  
  const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + '\nand I watched as well'
  }
  
  watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
  })
  