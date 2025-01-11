//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 59;
let countdown;

//Questions and Options array

const quizArray = [
    {
        id: "0",
        question: "Bahasa pemrograman untuk membuat machine learning yaitu?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correct: "Python",
    },
    {
        id: "1",
        question: "Di bawah ini merupakan Framework PHP, kecuali?",
        options: ["Laravel", "Vue JS", "CodeIgniter", "Symphony"],
        correct: "Vue JS",
    },
    {
        id: "2",
        question: "Dalam menyusun suatu program, langkah pertama yang harus dilakukan adalah?",
        options: ["Membuat program", "Membuat Algoritma", "Membeli komputer", "Proses"],
        correct: "Membuat Algoritma",
    },
    {
        id: "3",
        question: "Java dikembangka pada tahun?",
        options: ["1995", "1990", "1985", "1970"],
        correct: "1990",
    },
    {
        id: "4",
        question: "Berikut ini adalah hak akses yang dapat ditambahkan didepan method java, kecuali?",
        options: ["public", "protected", "private", "static"],
        correct: "static",
    },
    {
        id: "5",
        question: "Tipe data yang digunakan untuk menyimpan nomor telepon adalah?",
        options: ["String", "Integer", "Float", "Double"],
        correct: "Integer",
    },
    {
        id: "6",
        question: "Untuk menyimpan data nim mahasiswa, tipe data yang paling tepat digunakan adalah?",
        options: ["Int", "String", "Short", "Char"],
        correct: "String",
    },
    {
        id: "7",
        question: "Untuk menjalankan aplikasi yang menggunakan bahasa ios seperti swift dan xamarin, harus menggunakan laptop?",
        options: ["Windows", "Mac", "Linux", "Android"],
        correct: "Mac",
    },
    {
        id: "8",
        question: "Di bawah ini merupakan database SQL, kecuali?",
        options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
        correct: "MongoDB",
    },
    {
        id: "9",
        question: "Berikut ini adalah contoh operator aritmatika, KECUALI...?",
        options: ["&&", "+", "/", "*"],
        correct: "&&",
    },
    {
        id: "10",
        question: "Algoritma dapat direpresentasikan sebagai…?",
        options: ["Pseudocode", "Sintaks", "Perulangan", "Pemrograman"],
        correct: "Pemrograman",
    },
    {
        id: "11",
        question: "Software yang digunakan untuk mentranslasi dan mengeksekusi bahasa pemrograman tingkat tinggi dalam satu baris pada satu waktu disebut…?",
        options: ["Assembler", "Compiler", "Eksekutor", "Interpreter"],
        correct: "Compiler",
    },
    {
        id: "12",
        question: "Pemberian nilai variable yang benar adalah....?",
        options: ["_panjang", "nomor.telepon", "%nama guru", "alamat_siswa"],
        correct: "alamat_siswa",
    },
    {
        id: "13",
        question: "Perintah algoritma perulangan yang memeriksa kondisi di awal sebelum melakukan pengulangan adalah …?",
        options: ["for down to do","repeat until","if then","for to do"],
        correct: "repeat until",
    },
    {
        id: "14",
        question: "Informasi yang telah disimpan sebaiknya ditelusuri kembali merupakan fungsi TIK yaitu….",
        options: ["Storage", "Generating", "Transmission", "Retrival"],
        correct: "Storage",
    },
    {
        id: "15",
        question: "Manfaat TIK di bidang perbankan berupa munculnya aplikasi ….",
        options: ["e-bussiness", "toko online", "internet banking", "e-library"],
        correct: "internet banking",
    },
    {
        id: "16",
        question: "Peran teknologi Informasi adalah….",
        options: ["Pekerjaan dapat terselesaikan tepat waktu", "Memudahkan proses mengolah data", "Menambah pertemanan atau relasi", "Keamanan data lebih terjamin"],
        correct: "Memudahkan proses mengolah data",
    },
    {
        id: "17",
        question: "Salah satu jenis kejahatan di dunia maya....",
        options: ["carding", "privacy", "konsumtif", "cookie"],
        correct: "carding",
    },
    {
        id: "18",
        question: "Menjelajah di dunia internet dikenal dengan....",
        options: ["download", "browsing", "seeking", "upload"],
        correct: "browsing",
    },
    {
        id: "19",
        question: "Sebuah metode memecahkan masalah dengan melibatkan teknik yang digunakan software engineer disebut ….",
        options: ["algoritma", "kompiler", "Computational thinking", "programing"],
        correct: "Computational thinking",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});
//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 59;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);
//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};
//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};
//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}
//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}
//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 59;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}
//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});
//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};