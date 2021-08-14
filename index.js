var readlineSync = require('readline-sync');
var chalk = require('chalk');

var score = 0;

function welcome()
{
    var userName = readlineSync.question(chalk.green('What Is Your Name? '));

    console.log(chalk.cyan.bold(' Welcome ' + userName.toUpperCase() + ' lets see how much you know abot HITESH'));


}

var questions = [
    {
        question : 'Where do Hitesh Live? ',
        answer : 'Dhule'
    },
    {
        question : 'What is the nickname of Hitesh? ',
        answer : 'hitu'
    },

    {
        question : 'Which Fictional Character Hitesh love? ',
        answer : 'Naruto'
    },
    {
        question : 'Who is a Hitesh mentor? ',
        answer : 'Tanay Pratam'
    },
    {
        question : 'What is Hitesh Want to become?',
        answer : 'Web Developer'
    }
];

function play(question,answer)
{
   var userAnswer = readlineSync.question(question);
   if(userAnswer.toUpperCase() === answer.toUpperCase())
   {
       console.log('Right');
       score = score + 1;
   }else{
       console.log('Wrong');
   }

   console.log(chalk.red("You'er score is :", score ));
   console.log('----------------------------------------');

}

function game()
{
    for(var i=0 ; i < questions.length ; i++)
    {
        var currentQuestion = questions[i];
        play(currentQuestion.question,currentQuestion.answer)
    }
}

function showScore()
{
  console.log('Your final score is: ', score);
  
}

welcome();
game();
showScore();