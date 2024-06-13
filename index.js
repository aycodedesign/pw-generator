const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

let password1 = document.getElementById("password-el1")
let password2 = document.getElementById("password-el2")

function generatePw() {
  let createPassword1 = ''
  let createPassword2 = ''

  // FIRST PW
  for (let i = 0; i < 15; i++) {
    let p = Math.floor(Math.random() * characters.length)

    createPassword1 += characters[p]
  }

  // SECOND PW
  for (let j = 0; j < 15; j++) {
    let p = Math.floor(Math.random() * characters.length)

    createPassword2 += characters[p]
  }

  password1.textContent = createPassword1
  password2.textContent = createPassword2
}


