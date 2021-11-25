var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
console.log('Welcome To The Tech Quiz Game');

var username = readlineSync.question("Tell me your name: ")
console.log("Hello " + chalk.yellowBright(username))

var quizArr = [
{
  question:'Who is the father of computer? \na. Herman Hollerith \nb. Ada Byron \nc. Charles Babbage\n',
  answer:'c'
},
{
  question: "Which of the following is not a characteristic of a computer? \na. Speed \nb.  Intelligence \nc. Automation \n",
  answer: "b",
},
{
  question:'	The first computer was programmed using? \na. Assembly language \nb. Machine language \nc. Object code \n',
  answer:'b',
},
{
  question:'what is used in third generation computer.?  \na. Transistors \nb. Microprocessor \nc. Integrated circuit \n',
  answer:'c',
},
{
  question:"Which is processed by the computer into information.? \na.Date \nb.Processor \nc.Input\n",
  answer:"b"

},
{
  question:"Who is the fahter of C language? \na.Date \nb.Dannis Ritchie \nc.Charlse Babage\n",
  answer:"b"

}
];

function game(ques,ans){
  var userAns=readlineSync.question(ques);
  if(userAns.toUpperCase() === ans.toUpperCase()){
    score++;
    console.log(chalk.green("Right Answer"));
    console.log(chalk.bold("Score = " + score));
  }
  else{
    console.log(chalk.red("Wrong Answer"));
    console.log(chalk.bold("Score = " + score));
  }
  console.log("*****************")


}

for(i=0;i<quizArr.length;i++){
  currentQues = quizArr[i].question;
  currentAns = quizArr[i].answer;
  game(currentQues,currentAns);
}

console.log('your score is ' + score);
