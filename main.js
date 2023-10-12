document.addEventListener('DOMContentLoaded', function () {
  const textToType = "-> Coming soon.";
  const typingContainer = document.getElementById('typing-container');
  const typingSpeed = 50;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < textToType.length) {
      typingContainer.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, typingSpeed);
    }
  }
 
  typeText();
});
