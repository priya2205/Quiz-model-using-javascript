const correctAnswers = ['A','B','D','A'];
const form = document.querySelector('.quiz-form');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let  score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    //check answers
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
        score+=25;
        }
    });
    //show score
    scrollTo(0,0);//auto scroll to top page
    const result = document.querySelector('.result');
    const Score = document.querySelector('.score1');
    let i=0;
    setInterval(()=>{
     if(i<=score){
        result.textContent=`${i}%`;
        i+=5;
     }
    },100);
    Score.style.display='block';
});
