var correctAnswerID;
var currentQuestionIndex = 0;
var questionsList = [];

$.ajax({
    type: 'GET',
    url: 'https://run.mocky.io/v3/77623138-a4b2-41ee-ba9b-18f0224f4f18',
    dataType: 'json',
    success: function(data) {
        var resultsArray = data['results'];
        questionsList = resultsArray;
        showNextQuestion(resultsArray[0]);
        addEvents();
    }
});

function showNextQuestion(question) {
    $('#question').text(question['question']);

    var answerIds = {
        1: "#answer_1",
        2: "#answer_2",
        3: "#answer_3",
        4: "#answer_4"
    }

    // set correct answer
    var randomInteger = Math.floor(Math.random() * 4) + 1;
    var randomAnswerId = answerIds[randomInteger];
    correctAnswerID = randomInteger;
    delete answerIds[randomInteger];
    $(randomAnswerId).text(question['correct_answer']);

    // set incorrect answers
    var incorrectAnswers = question['incorrect_answers'];
    var answerIdsArray = Object.values(answerIds);
    $(answerIdsArray[0]).text(incorrectAnswers[0]);
    $(answerIdsArray[1]).text(incorrectAnswers[1]);
    $(answerIdsArray[2]).text(incorrectAnswers[2]);
} 

function addEvents()  {
    $("#answer_1").click(function(){
        checkAnswer(1);
    });

    $("#answer_2").click(function(){
        checkAnswer(2);
    });

    $("#answer_3").click(function(){
        checkAnswer(3);
    });
    
    $("#answer_4").click(function(){
        checkAnswer(4);
    });
}

function checkAnswer(answerId) {
    var elementId = "#div_answer_" + answerId;

    if (answerId == correctAnswerID) {
        $(elementId).css('background','#32CD32');
    } else {
        $(elementId).css('background','#FF0000');
    }

    asyncCall(elementId);
}
  
async function asyncCall(elementId) {
    const result = await resolveAfterSeconds();
    currentQuestionIndex += 1;
    console.log("next question id: " + currentQuestionIndex);
    if (currentQuestionIndex < questionsList.length) {            
        var nextQuestion = questionsList[currentQuestionIndex];
        console.log(nextQuestion);
        showNextQuestion(nextQuestion);

        $(elementId).css('background','#FFFFFF');
    } else {
        console.log("Quiz finished");
    }
}
  
function resolveAfterSeconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });
}