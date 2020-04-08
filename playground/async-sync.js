console.log('starting')

setTimeout(() => {
    console.log('2 sec timer')
}, 2000)

console.log('stopping')


// In Synchronous model, we need to wait for 2 sec at 
// setTimeout before executing the next statement.

// In Async model, we do not wait at setTimeout. Instead, 
// we move forward and execute the next statement.

// ***setTimeout is a Async function***

// Async Execution ***

// call stack keeps track of all functions but when a 
// async function arrives, it is transferred to Node apis 
// block from where it execute for given time and is sent
// to event loop. event loop is a queue so works as fifo.
// it waits for call stack to become empty. Once, main function call
// terminates, function from queue is sent to stack for execution.

// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif