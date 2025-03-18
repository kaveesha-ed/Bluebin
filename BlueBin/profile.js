var ul = document.getElementById('final-output-ul');
var questionNumber = document.getElementById('number-question');

let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let q4 = document.getElementById("q4");
let q5 = document.getElementById("q5");

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");

const ArrayQ1 = ["Your Name", "Email", "Age", "Gender", "Agree with privacy terms"];
const ArrayA1 = [];
const ArrayQ2 = ["Are you taking any steps to protect marine environments?", 
                 "Aware of local marine conservation efforts?",
                 "Interested in learning about threats to marine life?",
                 "Have you heard about sustainable fishing practices?", 
                 "Aware of ocean pollution issues?"];
const ArrayA2 = [];
const ArrayQ3 = ["Do you enjoy any water-related activities?", 
                 "Are you interested in marine wildlife photography or observation?", 
                 "Have you ever visited an aquarium or marine conservation center?", 
                 "Have you ever explored marine habitats, like tide pools or reefs?", 
                 "Have you ever participated in a beach cleanup or similar ocean conservation activity?"];
const ArrayA3 = [];
const ArrayQ4 = ["Prefer articles, videos, or infographics?", "Interested in specific ocean topics?", 
                 "Open to receiving conservation tips?", "Would you like event notifications?"];
const ArrayA4 = [];

function promptFunc(title) {
    return prompt(title);
}

let startButton = document.getElementById("button-start");

startButton.addEventListener("click", () => {
    startButton.style.display = 'none';

    ArrayA1.push(promptFunc(ArrayQ1[0]));
    console.log(ArrayA1)
});

let nextButton = document.getElementById("next-btn");
let skipButton = document.getElementById("skip-btn");

nextButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    next();
});

skipButton.addEventListener("click", () => {
    startButton.style.display = 'none';
    skip();
});

function setQuestion(array) {
    q1.innerHTML = array[0] + ":";
    q2.innerHTML = array[1] + ":";
    q3.innerHTML = array[2] + ":";
    q4.innerHTML = array[3] + ":";

    if (array.length == 5) {
        q5.innerHTML = array[4] + ":";
    } else {
        q5.style.display = 'none'
        a5.style.display = 'none'
    }
}

progressBar(0);

function progressBar(completed) {
    let progress = document.getElementById("progress");
    let progressBarLine = document.getElementById("progress-bar-line");

    if (completed == 0) {
        progress.innerHTML = "Profile Completed 0%";
        progressBarLine.style.width = "0%";
        questionNumber.innerHTML = "STEP 1 Perosnal Detials | Question 1/5";
        setQuestion(ArrayQ1);

    } else if (completed == 1) {
        progress.innerHTML = "Profile Completed 20%";
        progressBarLine.style.width = "25%";
        questionNumber.innerHTML = "STEP 2 Knowledge and Awareness | Question 1/5";
        setQuestion(ArrayQ2);
    } else if (completed == 2) {
        progress.innerHTML = "Profile Completed 40%";
        progressBarLine.style.width = "50%";
        questionNumber.innerHTML = "STEP 3 Interests and Activities | Question 1/5";
        setQuestion(ArrayQ3);
    } else if (completed == 3) {
        progress.innerHTML = "Profile Completed 60%";
        progressBarLine.style.width = "75%";
        questionNumber.innerHTML = "STEP 4 Preferred Content and Updates | Question 1/4";
        setQuestion(ArrayQ4);
    } else {
        progress.innerHTML = "Profile Completed 100%";
        progressBarLine.style.width = "100%";
    }
}

function loop(array1, array2) {
    for (let i = array1.length; i < array2.length; i++) {
        array1.push(promptFunc(array2[i]));
        break;
    }
}

function setAnswer(array) {
    console.log(array[0])
    if (array[0] != null) {
        a1.innerText = array[0];
    }
    if (array[1] != null) {
        a2.innerText = array[1];
    }
    if (array[2] != null) {
        a3.innerText = array[2];
    }
    if (array[3] != null) {
        a4.innerText = array[3];
    }
    if (array[4] != null) {
        a5.innerText = array[4];
    }
}

function emptyAnswer() {
    a1.innerHTML = "";
    a2.innerHTML = "";
    a3.innerHTML = "";
    a4.innerHTML = "";
    a5.innerHTML = "";
}

function finalOutputLoop(arrayQ, arrayA) {
    for (let i = 0; i < arrayA.length; i++) {
        var li = document.createElement('li');
        var questionParagraph = document.createElement('p');
        questionParagraph.textContent = arrayQ[i] + ": ";
        var answerParagraph = document.createElement('p');
        answerParagraph.textContent = arrayA[i];
        li.appendChild(questionParagraph);
        li.appendChild(answerParagraph);

        ul.appendChild(li);
    }
}

function finalOutput() {
    document.querySelector(".output").style.display = 'none';
    document.querySelector(".final-output").style.display = 'block';

    finalOutputLoop(ArrayQ1, ArrayA1);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(ArrayQ2, ArrayA2);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(ArrayQ3, ArrayA3);

    var li = document.createElement('li');
    var div = document.createElement('div');
    li.appendChild(div);
    ul.appendChild(li);

    finalOutputLoop(ArrayQ4, ArrayA4);
}

function next() {

    if (ArrayA1.length < 5) {
        loop(ArrayA1, ArrayQ1);
        setAnswer(ArrayA1)
        if (ArrayA1.length == 5) {
            progressBar(1);
            emptyAnswer();
        }
    } else if (ArrayA2.length < 5) {
        loop(ArrayA2, ArrayQ2);
        setAnswer(ArrayA2)
        if (ArrayA2.length == 5) {
            progressBar(2);
            emptyAnswer();
        }
    } else if (ArrayA3.length < 5) {
        loop(ArrayA3, ArrayQ3);
        setAnswer(ArrayA3)
        if (ArrayA3.length == 5) {
            progressBar(3);
            emptyAnswer();
        }
    } else if (ArrayA4.length < 4) {
        loop(ArrayA4, ArrayQ4);
        setAnswer(ArrayA4)
        if (ArrayA4.length == 4) {
            progressBar(4);
            emptyAnswer();
            finalOutput();
        }
    }
}

function skip() {

    if (ArrayA1.length < 5) {

        ArrayA1.push("");
        console.log(ArrayA1)
        if (ArrayA1.length == 5) {
            progressBar(1);
            emptyAnswer();
        }

    } else if (ArrayA2.length < 5) {
        ArrayA2.push("");
        console.log(ArrayA2)
        if (ArrayA2.length == 5) {
            progressBar(2);
            emptyAnswer();
        }
    } else if (ArrayA3.length < 5) {
        ArrayA3.push("");
        console.log(ArrayA3)
        if (ArrayA3.length == 5) {
            progressBar(3);
            emptyAnswer();
        }
    } else if (ArrayA4.length < 4) {
        ArrayA4.push("");
        console.log(ArrayA4)
        if (ArrayA4.length == 4) {
            progressBar(4);
            emptyAnswer();
            finalOutput();
        }
    }
}