
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text==="exit\n") {
    quit();
  }
  else if(text === 'hello\n' || text.split(" ")[0] === "hello"){
    hello(text);
  }
  else if(text === 'help\n'){
    help();
  }
  else if (text === 'list\n'){
    list();
  }
  else if (text.startsWith('add')){
    add(text);
  }
  else if (text.startsWith('remove')){
remove(text);
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(text){
  if (text === "hello\n") {
    console.log("hello!");
    return
  }

  text = text.replace('\n', '').trim();
  var words = text.split(' ');
  if (words[0] === 'hello') {
    var argument = words.slice(1).join(' ');
    console.log(`hello ${argument}!`);
  }
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Ahmad kharma ")

// help command of the command 

function help () {
  let h= [`"hello"for saying hello!`,`"hello world " for saying hello world!`, "help", "exit", "quit"]
  console.log("\nThe commands are: \n")
  h.forEach((e) => {
  console.log(e)})
}

let listtasks = ["task1","task2"];

function list (text){
  for (let i=0; i <listtasks.length;i++){
console.log(`${i+1}- [ ]${listtasks[i]}`);

}
}

function add(obj){
obj=obj.trim().split(" ")[1]
if(obj==undefined){
  console.log("error")
}
else{
  listtasks.push(obj)
}

}
function remove(obj) {
  obj = obj.replace('\n', '').trim();
  if (obj === "remove\n") {
    listtasks.pop();
    return
  }

  var rem = obj.split(' ');
  if (rem[0] === 'remove') {
    var b = rem.slice(1).join(' ');
    if (b > listtasks.length) {
      console.log("You enter a number does not exist");
    } else {
      listtasks.splice(`${b[0] - 1}`, 1);
    }
  }
}