document.addEventListener('DOMContentLoaded', function () {
  const textToType = "-> Coming soon.";
  const typingContainer = document.getElementById('typing-container');
  const typingSpeed = 50;
  let charIndex = 0;
  
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
});
