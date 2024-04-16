
const writeCards = (namesArr, eventName) =>{
  const thankYouArray = [];
  for (let i = 0; i < namesArr.length; i++){
    thankYouArray.push(`Thank you, ${namesArr[i]}, for the wonderful ${eventName} gift!`);
  }
  return thankYouArray;
}


function countDown(){
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
}
countDown();
