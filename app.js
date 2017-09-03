
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

var    question1 = new Questions('How far is the Sun away from Earth?',
                      [' - 152_million_km', 
                       ' - 124_million_km', 
                       ' - 170_million_km'], 
                      0);

var    question2 = new Questions('What is the answer to Life the Univers and Everything?',
                         ['- I don\'t know!', 
                          '- 42',
                          '- One day we all gonna die'],
                         0,1,2);

var    question3 = new Questions('What is the name of US President?',
                          ['- Vladimir Putin', 
                           '- Donald Trump', 
                           '- Jacques Chirac'], 
                          1);

var     question4 = new Questions('What is hard water ?',
                                  ['- ICE', 'CocaCola', 'High Mineral Content'], 2);

var questions = [question1, question2, question3];

var randomQ = Math.floor(Math.random() * questions.length);

questions[randomQ].displayQuestions();

var answer = parseInt(prompt('Select the correct answer.'));

questions[randomQ].checkAnswer(answer);
















