<img alt="GitHub followers" src="https://img.shields.io/github/followers/Raimeeab?style=social">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Raimeeab/password-generator?style=social">     
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/Raimeeab/password-generator?style=social">

# Password Generator
--- 

![Password-generator-demo](assets/images/password-generator-demo.png)

## Description 

- My motivation is to create a password generator using JavaScript and the existing CSS/ HTML code provided
- The aim of this porject is to allow the user to select their preference of what characters they would like to use (Uppercase/ Lowercase letters, numbers and symbols)
- The current code does not display alerts, prompts for the user to select desired characters, nor does it have a working function for a password generator. 

Link to the [site](https://raimeeab.github.io/password-generator/)

## Technologies Used 
HTML, Advanced CSS and basic JavaScript. 

## Usage 
Follow the prompts on the page to select desired characters for your password generator, then click generate button to get your password. 

### Logic: 
 BEGIN 

    * When user hits generate password button, it will prompt the user to input how long their password should be (min 8, max 128) 
        <!-- it would be a prompt (textbox) -->
        <!-- alert for informing user of error, if below 8 or over 128 characters, and alert for if they dont select any of the confirm buttons  -->
    * This will be followed by a series of prompts *note: the user must select atleast one prompt in order for the password generator to work, if that does not occur, an error message with "you must select atleast one of the following" and then repeat the prompts* 
        <!-- confirm button -->
        <!-- how to confirm that your password will use aall that is selected  -->
        * "Do you want special characters(symbols) in your generated password?"  (OK || Cancel)
        * Followed by "Do you want numeric characters in your generated password?" (OK || Cancel)
        * Followed by "Do you want lowercase characters in your generated password?" (OK || Cancel)
        * Followed by "Do you want uppercase characters in your generated password? (OK || Cancel)
    * When all all prompts are answered, a password is generated to match criteria selected 
    * Password is then displayed on the page, which can be copied by user 

END 

## Contributors
*The Univserity of Sydney | Trilogy Education Services*
*Raimee Abbassi*

## License
MIT License
Copyright (c) [2021] [Password-Generator]
Permission is herby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limiation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject following coditions: 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MECHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OF OTHER DEALINGS IN THE SOFTWARE.  
---

## How to Contribute
For information on how to contribute, please follow the guidlelines listed in [Contributor Covenant](https://www.contributor-covenant.org/) 
