function submitAnswers() {
    var total = 10;
    var score = 0;



    //input

    var q1 = document.forms["quiz"]["q1"].value;
    var q2 = document.forms["quiz"]["q2"].value;
    var q3 = document.forms["quiz"]["q3"].value;
    var q4 = document.forms["quiz"]["q4"].value;
    var q5 = document.forms["quiz"]["q5"].value;
    var q6 = document.forms["quiz"]["q6"].value;
    var q7 = document.forms["quiz"]["q7"].value;
    var q8 = document.forms["quiz"]["q8"].value;
    var q9 = document.forms["quiz"]["q9"].value;
    var q10 = document.forms["quiz"]["q10"].value;


    //validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == "") {
            alert("You missed Question " + i);
        }
    }

//correct answers

var answers = ["c", "d", "a", "d", "d", "c", "c", "c", "b", "b"];

// check answers
for(i = 1; i <= total; i++){
    if(eval('q'+i) == answers[i-1]){
        score++;
    }
}

//display results
var results = document.getElementById('results')
results.innerHTML = "<h3>Your Correct Answers are <span>" + score +"</span> out of <span>"+ total + "</span></h3>"
return false;
}