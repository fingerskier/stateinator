import StateMachine from '../index.js'


function machine() {
  const O = {}
  const S = new StateMachine(O)


  S.verbose = true


  // HOW-TO setup states
  S
  .addState('one', {
    name: 'one',
    onEnter: ()=>{
      console.log('enter state 1')
    },
    onExit: ()=>{
      console.log('exit state 1')
    },
    onUpdate: ()=>{
      console.log('update state 1')
    },
  })
  .addState('two', {
    name: 'two',
    onEnter: ()=>{
      console.log('enter state 2')
    },
    onExit: ()=>{
      console.log('exit state 2')
    },
    onUpdate: ()=>{
      console.log('update state 2')
    },
  })
  .addState('three', {
    name: 'three',
    onEnter: ()=>{
      console.log('enter state 3')
    },
    onExit: ()=>{
      console.log('exit state 3')
    },
    onUpdate: ()=>{
      console.log('update state 3')
    },
  })
  .addState('four', {
    name: 'four',
    onEnter: ()=>{
      console.log('enter state 4')
    },
    onExit: ()=>{
      console.log('exit state 4')
    },
    onUpdate: ()=>{
      console.log('update state 4')
    },
  })
  .addState('five', {
    name: 'five',
    onEnter: ()=>{
      console.log('enter state 5')
    },
    onExit: ()=>{
      console.log('exit state 5')
    },
    onUpdate: ()=>{
      console.log('update state 5')
    },
  })
  .addState('six', {
    name: 'six',
    onEnter: ()=>{
      console.log('enter state 6')
    },
    onExit: ()=>{
      console.log('exit state 6')
    },
    onUpdate: ()=>{
      console.log('update state 6')
    },
  })
  .addState('seven', {
    name: 'seven',
    onEnter: ()=>{
      console.log('enter state 7')
    },
    onExit: ()=>{
      console.log('exit state 7')
    },
    onUpdate: ()=>{
      console.log('update state 7')
    },
  })


  // HOW-TO setup transitions
  S
  .addTransition('one', 'two')
  .addTransition('one', 'six')
  .addTransition('one', 'seven')
  .addTransition('two', 'three')
  .addTransition('two', 'seven')
  .addTransition('three', 'four')
  .addTransition('four', 'three')
  .addTransition('four', 'six')
  .addTransition('four', 'seven')
  .addTransition('six', 'seven')


  return S
}


export default machine