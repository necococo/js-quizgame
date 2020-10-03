const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: '私の好きなモバイルFPSゲームは？',
    answers: [ 'フォートナイト', '荒野行動', 'pubg', 'CoD'],
    correct: 'pubg'
  }
];
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');


const setupQuiz = ()=>{
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let btnIndex = 0;
  while(btnIndex < $button.length){
    $button[btnIndex].textContent = quiz[quizIndex].answers[btnIndex];
    btnIndex++;
  }
}
setupQuiz();

const clickHandler = (e)=>{
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quiz.length){
    setupQuiz();
  }else{
    window.alert('終了!  あなたの正解数は' + score + '/' + quiz.length + 'です！');

  }
}


let handlerIndex = 0;
while(handlerIndex < $button.length){
  $button[handlerIndex].addEventListener('click', (e)=> {
    clickHandler(e);
  });
  handlerIndex++;
}




