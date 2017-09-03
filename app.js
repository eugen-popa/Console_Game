
function Questions(question, answers, correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Questions.prototype.displayQuestions = function() {
    
    console.log(this.question);
for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    }
}

Questions.prototype.checkAnswer = function (){
    if (answer === this.correct) {
        console.log('Congradulation that\'s Correct');
    } else{
        console.log('SORRY Try again');
    }
} 

var    q1 = new Questions('How far is the Sun away from Earth?',
                      [' - 152_million_km', 
                       ' - 124_million_km', 
                       ' - 170_million_km'], 
                      0);

var    q2 = new Questions('What is the answer to Life the Univers and Everything?',
                         ['- I don\'t know!', 
                          '- 42',
                          '- One day we all gonna die'],
                         1);

var    q3 = new Questions('What is the name of US President?',
                          ['- Vladimir Putin', 
                           '- Donald Trump', 
                           '- Jacques Chirac'], 
                          1);

var questions = [q1, q2, q3];
var randomQ = Math.floor(Math.random() * questions.length);

questions[randomQ].displayQuestions();

var answer = parseInt(prompt('Please select the correct answer.'));

questions[randomQ].checkAnswer(answer);
















