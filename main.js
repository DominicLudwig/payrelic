document.addEventListener('DOMContentLoaded', function () {
  const textToType = "-> Coming soon.";
  const typingContainer = document.getElementById('typing-container');
  const typingSpeed = 50;
  let charIndex = 0;
  let toggle = false;
  let iteration = 0
  let maxIterations = 10;

  function waiting() {
    if(iteration >= maxIterations) {
      return;
    }
    if(charIndex >= textToType.length){
      let text = typingContainer.textContent;
      if(!toggle) {
         text += '_';
      }else{
         text = text.slice(0, -1);
      }
      toggle = !toggle;
      iteration++;
      typingContainer.textContent = text;
    }
    setTimeout(waiting, 500); 
  }
  
  function typeText() {
    if (charIndex <= textToType.length) {
      let text = typingContainer.textContent;
      if (text.length > 0) {
        text = text.slice(0, -1);
      }
      if (charIndex < textToType.length) {
        text += textToType.charAt(charIndex) + '_';
      }
      
      typingContainer.textContent = text;
      charIndex++; 
      setTimeout(typeText, typingSpeed);
      }
  }
 
  typeText();
  waiting();
});
