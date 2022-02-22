/* 
TODO:
- Select all of important elements.
- Create a function for Random Password .

*/

/* step 1 - select important elements  */
const passwordField = document.getElementById("password-field");
const generateBtn = document.getElementById("generate-btn");
const lengthField = document.getElementById("lengthOfPassword");
const allButtons = document.getElementsByClassName("field");

/* step 2 - create a function for random password  */

const randomPassword = () => {
    passwordField.value = '';
    const lowerAlp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperAlp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const symbols = `/\()"'-.,:;<>~!@#$%^&*|+=[]{}~?│`.split('');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const lengthPassword = parseInt(lengthField.value);

    let mixes = lowerAlp.concat(upperAlp, symbols, numbers);
    for (let i = 0; i < mixes.length; i++) {
        let rand = Math.round(Math.random() * (mixes.length - 1));
        if (lengthPassword > 30 || lengthPassword < 8) {
            passwordField.value = `Password characters will be 8 to 30`;
            passwordField.classList.add('error');
        } else {
            if (i < lengthPassword) {
                passwordField.value += mixes[rand];
                passwordField.classList.remove('error');
            }
        }

    }






}
randomPassword();

generateBtn.addEventListener('click', randomPassword);