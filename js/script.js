'use strict';
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result')

checkButton.addEventListener('click', checkPalindrome);

function checkPalindrome(e) {
   e.preventDefault();
   while (resultDiv.firstChild) {
      resultDiv.removeChild(resultDiv.firstChild);
   }
   const regex = /[^A-Za-z0-9]/g;
   const text = textInput.value.replace(regex, '').toLowerCase();
   if (!text) {
      alert('Please input a value');
   }
   else {
      const textArray = [...text];
      const reversedArray = [...text].reverse();
      const result = document.createElement('span')
      let isPalindrome = true;
      for (let i = 0; i < text.length; i++) {
         if (textArray[i] !== reversedArray[i]) {
            isPalindrome = false;
            break;
         }
      }
      if (isPalindrome) {
         result.innerText = `${textInput.value} is a palindrome`;
      }
      else {
         result.innerText = `${textInput.value} is not a palindrome`;
      }
      resultDiv.appendChild(result);
   }
}