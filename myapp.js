//const x=require('./notes');
 //var res = x.addNote(); // - result variable
 //console.log(`result is: ${res}`); /// display string
//console.log('result is:', x.addNote(2,3));  // add two numbers
//..............10/01/18.........
const notes = require('./notes');
//const notes = require('./arthimatic_operation');
//const notes = require('./vowels');
//const yargs=require('yargs');

// node.addNote(argv.title, argv.body);
const yargs=require('yargs');
const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('yargs:',argv);
//..addNote
if(command==='add')
{
console.log('adding new note');
notes.addNote(argv.title, argv.body);
}
// //......listnote
if(command==='list')
{
console.log('listing new note');
notes.getAll();
}

// //.....removeNote
if(command==='remove')
{
console.log('removeing new note');
notes.removeNote(argv.title, argv.body);
}
//........readNote........
if(command==='read')
{
console.log('reading new note');
notes.readNote(argv.title, argv.body);
}
//......addition.........
// if(command==='add'){
// notes.addition(argv.num1, argv.num2);
// }
// //.......................
// if(command==='sub'){
// notes.subtraction(argv.num1, argv.num2);
// }
// //.......................
// if(command==='div'){
// notes.division(argv.num1, argv.num2);
// }
// //.........................
// if(command==='mul'){
// notes.multiplication(argv.num1, argv.num2);
// }

//.........vowels..............

if (command==='vowel'){
  notes.vowelsfunction(argv.str);
}
