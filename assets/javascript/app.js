// questions
var questions = [{
    question: "Who is the current shortstop for the Cleveland Indians?",
    choices: ["Francisco Lindor", "Omar Vizquel", "Jhonny Peralta", "Asdrúbal Cabrera"],
    correctAnswer: 0
}, {
    question: "Who is the current manager of the Indians?",
    choices: ["Sandy Alomar, Jr", "Terry Francona", "Charlie Manuel", "Eric Wedge"],
    correctAnswer: 1
}, {
    question: "What was the name of the Indians stadium when it was first opened in 1994?",
    choices: ["Progressive Field", "Jacobs Field", "Municipal Stadium", "FirstEnergy Stadium"],
    correctAnswer: 1
}, {
    question: "Who is the Indians' all-time career home runs leader?",
    choices: ["Jim Thome", "Manny Ramirez", "Carlos Santana", "edwin encarnacion"],
    correctAnswer: 0
}, {
    question: "What sluggish slugger left the Indians to play for the Red Sox in 2001?",
    choices: ["Bob Feller", "Albert Belle", "Jim Thome", "Manny Ramirez"],
    correctAnswer: 3
}];

var currentQuestion;
var correctAnswer;
var incorrectAnswer;
var unanswered;
var seconds;
var time;
var answered;
var userSelect;

$('#startBtn').on('click', function () {
    $(this).hide();
    newGame();

});

$('#startOverBtn').on('click', function () {
    $(this).hide();
    newGame();
});

function newGame() {
    $('#finalMessage').empty();
    $('#correctAnswers').empty();
    $('#incorrectAnswers').empty();
    $('#unanswered').empty();
    currentQuestion = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion() {
    answered = true;

    //sets up new questions & answerList
    $("#currentQuestion").html("Question #" + (currentQuestion + 1) + "/" + questions.length);
    $(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");
    for (var i = 0; i < 4; i++) {
        var choices = $("<div>");
        choices.text(questions[currentQuestion].answerList[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice");
        $(".answerList").append(choices);
    }