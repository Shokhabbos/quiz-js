const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

const correctAnswers = ["B", "A", "B", "A"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = [
    e.target.q1.value,
    e.target.q2.value,
    e.target.q3.value,
    e.target.q4.value,
  ];
  let score = 0;
  inputValue.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  result.classList.remove("d-none");
  let counter = 0;
  
  let timer = setInterval(() => {
          result.querySelector('span').textContent = `${counter}%`
          if(counter == score){
                clearInterval(timer)
          } else{
                counter++
          }
     
  },10)


});


















// setTimeout(( ) => {
//         console.log("qalesan orto");
// }, 5000)

// let i = 0;
// let timer  = setInterval(() => {
//         i++
//   if (i < 15) {
//         console.log(i);
//   }else{
//     clearInterval(timer);

//   }
// }, 1000);
