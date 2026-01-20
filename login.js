const gameText = document.getElementById('game-text2');
const userInput = document.getElementById('user-input2');
const submitBtn = document.getElementById('submit-btn2');
function print(text) {
  gameText.innerText += text + "\n";
  gameText.scrollTop = gameText.scrollHeight;
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    let currentStep = 'askUsername';
    let username = "";
    submitBtn.addEventListener("click", async() =>{
      const input = userInput.value.trim();
      userInput.value ="";
