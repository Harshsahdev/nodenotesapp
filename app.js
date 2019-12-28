const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js')

// console.log(process.argv)
// console.log(yargs.argv)

// const command=process.argv[2];


// if(command === 'add') {
//     console.log('adding note')
// }else if (command==='remove'){
//     console.log('Removing note')
// }





// // const verma = chalk.red.inverse.bold('success');

// // console.log(verma)
// // console.log(process.argv)


// // custmiz yargs version

// yargs.version('1.1.1')


// // now adding the add remove and read 

yargs.command({
  command: 'add',
  describe:' add a new note',
  builder:{
      title:{
          describe:'note title',
          demandOption:true,
          type:'string'
      },
      body:{
          describe:'Note body',
          demandOption:true,
          type:'string'
      }
  },
  handler(argv){
      notes.addNote(argv.title,argv)
  }

// creating remove command
})


yargs.command({
    command: 'remove',
    describe:'remove a note  new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'list',
    describe:'listing a new note',
    handler(){
       notes.listNotes()
    }
})
  
yargs.command({
    command: 'read',
    describe:'reading a new note',
    handler(){
        console.log('reading a new note')
    }
})
  
  yargs.parse()
// console.log(yargs.argv);            



// const validator = require('validator');
// const getNotes = require('./notesapp.js');



// const msg = getNotes();
// console.log(msg);

// console.log(validator)










// const fs= require('fs')

// // fs.writeFileSync('notes.txt','this is made by harsh verma through node.js')
// fs.appendFileSync('notes.txt', 'this is the good thing which was made by harsh verma')