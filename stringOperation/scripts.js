const inputElement = document.getElementById("inputPara");
const resultElement = document.getElementById("Result");

// 1. Uppercase Function
function convertToUpperCase() {
  const inputValue = inputElement.value; // Lowercase .value
  const outputText = inputValue.toUpperCase();
  resultElement.textContent = outputText;
}

// 2. Lowercase Function
function convertToLowerCase() {
  const inputValue = inputElement.value;
  resultElement.textContent = inputValue.toLowerCase();
}

// 3. Camel Case Function
function convertToCamelCase() {
  const inputValue = inputElement.value;
  const words = inputValue.toLowerCase().split(/\s+/);
  const camelCase = words.map((word, index) => {
    if (index === 0) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
  resultElement.textContent = camelCase;
}

// 4. Extract First Word
function extractFirstWord() {
  const inputValue = inputElement.value.trim();
  const firstWord = inputValue.split(/\s+/)[0] || "";
  resultElement.textContent = firstWord;
}

// 5. Count Lines
function countLines() {
  const inputValue = inputElement.value;
  if (!inputValue) {
    resultElement.textContent = "Line count: 0";
    return;
  }
  const lines = inputValue.split("\n").length;
  resultElement.textContent = `Line count: ${lines}`;
}

// 6. Count Vowels
function countVowels() {
  const inputValue = inputElement.value;
  const vowels = inputValue.match(/[aeiouAEIOU]/g);
  const count = vowels ? vowels.length : 0;
  resultElement.textContent = `Vowel count: ${count}`;
}

// 7. Count Consonants
function countConsonants() {
  const inputValue = inputElement.value;
  const consonants = inputValue.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
  const count = consonants ? consonants.length : 0;
  resultElement.textContent = `Consonant count: ${count}`;
}

// 8. Extract Special Characters
function extractSpecialChars() {
  const inputValue = inputElement.value;
  const specialChars = inputValue.match(/[^a-zA-Z0-9\s]/g);
  resultElement.textContent = specialChars ? specialChars.join(" ") : "No special characters found";
}

// 9. Check Palindrome
function checkPalindrome() {
  const inputValue = inputElement.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = inputValue.split("").reverse().join("");
  if (inputValue === "") {
    resultElement.textContent = "Please enter text";
  } else if (inputValue === reversed) {
    resultElement.textContent = "Yes, it is a Palindrome!";
  } else {
    resultElement.textContent = "No, it is not a Palindrome.";
  }
}

// 10. Count Spaces
function countSpaces() {
  const inputValue = inputElement.value;
  const spaces = inputValue.match(/ /g);
  const count = spaces ? spaces.length : 0;
  resultElement.textContent = `Space count: ${count}`;
}

// 11. Replace Spaces With Hyphens
function replaceSpacesWithHyphens() {
  const inputValue = inputElement.value;
  resultElement.textContent = inputValue.replace(/\s+/g, "-");
}

// 12. Sort Words
function sortWords() {
  const inputValue = inputElement.value.trim();
  if (!inputValue) return;
  const sorted = inputValue.split(/\s+/).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).join(" ");
  resultElement.textContent = sorted;
}