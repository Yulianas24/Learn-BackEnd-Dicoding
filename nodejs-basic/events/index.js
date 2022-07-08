// TODO 1
const {EventEmitter} = require("events")

const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
// TODO 2
const myEmmiter = new EventEmitter()
// TODO 3
const birthday = ({name}) => {
  birthdayEventListener(name)
} 
// TODO 4
myEmmiter.on('birthday', birthday)
myEmmiter.emit('birthday', {name : "William"})