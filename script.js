// This currentQuestion keeps the track of the questions
let currentQuestion=0;
// this questionNum tracks the question number that appears on top
let questionNum=1;

// This prints the question number on top for the first time
  const num=document.getElementById('question-count').innerHTML=`Question ${questionNum}/9`;



  //This function updates the question number on the top and also after completion of the questions it calls the score-page website
function upadateQue(){
  let upadatedNum;
  if(questionNum<9){
    upadatedNum=questionNum+1;
    console.log(upadatedNum)
    const upadate=document.getElementById('question-count').innerHTML=`Question ${upadatedNum}/9`;
    questionNum=upadatedNum;
  }
  else if(questionNum>9){
    document.querySelector(".entire-box").innerHTML=`The quiz is over and you scored ${score}/9`;
  }

  }

//This object contains all the question in it
const questions=[
  {
    Que:'Engine in bmw m5 cs?',
    a:'1.6L turbo petrol',
    b:'4.4L V8 twin turbo petrol',
    c:'5.2L V10 naturally aspirated',
    d:'6.3L V8 jesko engine',
    correct:'4.4L V8 twin turbo petrol',
  },{
    Que:'Power produced by mercedes AMG S63s?',
    a:'791 hp',
    b:'600 hp',
    c:'1020 hp',
    d:'625 hp',
    correct:'791 hp',
  },{
    Que:'World fastest car?',
    a:'buggati supersport',
    b:'koenigsegg regera',
    c:'Hennessey Venom F5',
    d:'Rimac Nevera',
    correct:'buggati supersport',
  },{
    Que:'Fastest Electric Car?',
    a:'Tesla model s',
    b:'Rimac Nevera',
    c:'Tesla roadster',
    d:'Lucid air',
    correct:'Rimac Nevera',
  },{
    Que:'Which car line of lamborghini is stoped?',
    a:'Lamborghini Huracan',
    b:'Lamborghini Urus',
    c:'Lamborghini Aventador',
    d:'Lamborghini Sian',
    correct:'Lamborghini Aventador',
  },{
    Que:'Engine in porsche 911 turbo s?',
    a:'3L V8 twin turbo engine',
    b:'2.6L V6 naturally aspirated',
    c:'4.4L V8 twin turbo engine',
    d:'3.6L I6 twin turbo engine',
    correct:'3.6L I6 twin turbo engine',
  },{
    Que:'Which ferrari car has 1000bhp and is hybrid?',
    a:'superfast 812',
    b:'Laferrari',
    c:'roma',
    d:'SF90 stradale hybrid',
    correct:'SF90 stradale hybrid',
  },{
    Que:'Mclarens p1 cost is ?',
    a:'$ 1.1 million',
    b:'$ 20 million',
    c:'$ 2.5 million',
    d:'$ 4 million',
    correct:'$ 1.1 million',
  },{
    Que:'Best luxury car ?',
    a:'rolls royce phantom',
    b:'mercedes s class',
    c:'bmw 7 series',
    d:'ferrai SF90',
    correct:'rolls royce phantom',
  }
]

//This reads the question to be asked
const questionEl=document.getElementById('asked-que');


//This reads the options
const a= document.getElementById('select-a');
const b= document.getElementById('select-b');
const c= document.getElementById('select-c');
const d= document.getElementById('select-d');
console.log(a);
let correct;
//This helps to manpulate the submit  button
const submitBtn=document.getElementById('submit');

//This call of the function prints the question for the first time
nextQuestion();

//This functions updates the question when next button is pressed
function nextQuestion(){
  let currentQuestionEl;

     currentQuestionEl=questions[currentQuestion];

  questionEl.innerText=currentQuestionEl.Que;
  a.innerText=currentQuestionEl.a;
  b.innerText=currentQuestionEl.b;
  c.innerText=currentQuestionEl.c;
  d.innerText=currentQuestionEl.d;
  correct=currentQuestionEl.correct;
}


//myans holds the answer clicked by the user
let myans='';


//dic reads all the questions so that it can be used in functions
let dic=questions[currentQuestion];


//This function gets the id of the option selected and also gets us the text  in the option so that we can check if the answer is correct or incorrect
let ansId;
function getId(clicked){
  let ansId=clicked;
  console.log(ansId);
 
  if(ansId==='js-option-a'){
    myans=a.innerText;
    console.log(myans);
  
  
  }
  else if(ansId==='js-option-b'){
    myans=b.innerText;
    console.log(myans);
   
  
  }
  else if(ansId==='js-option-c'){
    myans=c.innerText;
    console.log(myans);

  
  }
  else if(ansId==='js-option-d'){
    myans=d.innerText;
    console.log(myans);
 
    
  }
}




//score contains the score of the user
let score=0;

// checkAns checks if the answer selected by the user is  correct of not if correct it increases the score by 1 if not  than it displays the correct answer  in the bottom
function checkAns(){

  if(myans==correct){
    score++;
    document.getElementById(`answer-${questionNum}-right`).style.display="block"
    
    
  }else{
    document.getElementById(`answer-${questionNum}-wrong`).style.display="block"
 
  }
}



//This eventlistener helps us to call the nextQuestion and upadateQue funcitons to upadate the questionNum and Question once the user choose the option they want
submitBtn.addEventListener("click",()=>{
  currentQuestion++;
  if(currentQuestion<questions.length){
    nextQuestion();
    upadateQue();
  }else{
    alert(`The quiz is over and you scored ${score}/9`);
  }

});
