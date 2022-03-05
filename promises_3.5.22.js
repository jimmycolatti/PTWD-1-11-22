// // function printString(str){
// //   setTimeout(() => {
// //     console.log(str)

// //     // console.log(`It took ${Math.floor(Math.random() * 100)}ms for this function to execute.`)

// //   }, Math.floor(Math.random() * 100))
// // }

// // printString('A')
// // printString('B')
// // printString('C')

// // function printStringWithCallback(str, callback){
// //   setTimeout(() => {
// //     console.log(str)
// //     callback();
// //   }, Math.floor(Math.random() * 100))
// // }

// // function printAllWithCallbacks(){
// //   printStringWithCallback('A', () =>{
// //     printStringWithCallback('B', () => {
// //       printStringWithCallback('C', () => {
// //         console.log('DONE!')
// //       })
// //     })
// //   })
// // }

// // printAllWithCallbacks();

// // procedural

// // example with promises

// //just by creating a promise, it is in the state of "pending"
function printStringWithPromises(str) {
  return new Promise((resolve, reject) => {
    if (str) {
      setTimeout(() => {
        console.log(str);
        resolve(str); // fulfilled state
      }, Math.floor(Math.random() * 100));
    } else {
      const err = new Error('String is never passed in!');
      console.log(err);
      reject(err); // rejected state
    }
  });
}

// // schooly approach
// printStringWithPromises('A')
// .then(val => {
//   console.log(`Passed: ${val}`)

//   return printStringWithPromises('B')
// })
// .then(val => {
//   console.log(`Passed: ${val}`)

//   return printStringWithPromises('C')
// })
// .then(val => {
//   console.log(`Passed: ${val}`)
// })
// .catch(err => console.log(`Error has occured: ${err}`))

function printAllWithPromises() {
  printStringWithPromises('A')
    .then(() => printStringWithPromises('B'))
    .then(() => printStringWithPromises('C'))
    .catch((err) => console.log(`Error has occured: ${err}`));
}

printAllWithPromises();

// example with async/await

async function printAllWithAsync() {
  try {
    await printStringWithPromises('A');
    await printStringWithPromises('B');
    await printStringWithPromises('C');
  } catch (err) {
    console.log(err);
  }
}

printAllWithAsync();

async function getName(name) {
  return name;
}

getName('jimmy');

getName('jimmy')
  .then((passedName) => console.log(passedName))
  .catch((err) => console.log(err));
