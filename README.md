# password generator

## Description
```
 throughout this assignment I was faced with many different challenges. When the code I tried to implement wasn't working,
 I looked for different ways to do it. Turns out it was the way I initially structured the generatePassword function. 
 I had scrunched the prompts all in one function and tried to mush everything together.
 It wasn't working out so I separated each prompt into its' own and used the concat feature to break the arrays with the needed characters for the pasword. 
 When prompted for password length, if user chooses out of the scope it'll alert the user and log their mistake.
 After clicking through the criteria a password is generated upon the page.
```

## User Story
```md
    AS A USER in need of a secure and strong password,
    I WANT to be able to use a site where a random password is generated for me
```
## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Sceenshots
[generated password](C:\Users\myspa\code\homework\third-challenge\images\genPasswordSS.png)

## Links
Deployed site: https://citlalli091.github.io/third-challenge/