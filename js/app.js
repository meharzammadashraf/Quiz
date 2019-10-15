function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress(){
    var currentQuestionNumber = quiz.getQuestionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
    console.log(currentQuestionNumber);
}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>  Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Which one is not oop ?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which one is nolanguage?", ["C", "C#", "Java", "c++"], "C"),
    new Question("Which onet oop language?", ["Java", "C#", "C++", "C1"], "C1"),
    new Question("Whi is not oop language?", ["Java", "C#", "C", "c++"], "C"),
    new Question("Whichot oop language?", ["Java", "C", "C#", "c++"], "C"),
    new Question("Which oanguage?", ["C", "C#", "Java", "c++"], "C"),
    new Question("Wne is not oop language?", ["Java", "C#", "C++", "C1"], "C1"),
    new Question("hich one is not oop language?", ["Java", "C#", "C", "c++"], "C"),
    new Question("ich one is not oop language?", ["Java", "C", "C#", "c++"], "C")
];

var quiz = new Quiz(questions);

populate();