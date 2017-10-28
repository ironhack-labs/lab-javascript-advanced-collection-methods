![](https://i.imgur.com/1QgrNNw.png)

# JS | Advanced Collection Methods Exercises | Test Maxence

These exercises will help you practice really useful JavaScript array methods.

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`

## Submission Instructions

Upon completion, run the following commands
```
$ git add .
$ git commit -m "done"
$ git push origin master
```
Navigate to your repo and create a Pull Request -from your master branch to the original repository master branch.

In the Pull request name, add your name and last names separated by a dash "-"

## Deliverables

You'll find two files inside the `lib/` folder: `harryPotter.js` and `abbeyRoad.js`. Leave them as they are! They contain the data you will use in your exercise, but you aren't supposed to change them. The two files are also already connected to the provided `index.html` file.

You are meant to write your JavaScript in a new file, separate from the two files in `lib/`. Make sure you make the appropriate connection between your new file JavaScript file and the `index.html`.

## Iteration 1 - The Office

![The Office picture](https://i.imgur.com/9g31Bwo.gif)

You work in a tax office. Boring, right? Luckily you can use your extra time to learn how to code. An email arrives: your bosses are sending an employee satisfaction survey. Your next coding exercise will be all about faking the results of your bosses' precious survey. That will definitely liven things up!

Since your company has 5 departments with 10 people working in each department, your mission is to create a 5x10 array and fill it with survey answers that are chosen at random from a list of 5 predetermined responses.

Employee responses can be one of:

- "This is the best job ever!"
- "Satisfied."
- "At least I get paid."
- "I'm looking for another job."
- "I don't want to answer."


1) Create an array for the predetermined responses.
```javascript
var responses = [ "This is the best job ever!",
                  "Satisfied.",
                  "At least I get paid.",
                  "I'm looking for another job.",
                  "I don't want to answer." ];
```

2) Create a function that randomly selects an item from the `responses` array.

3) Create a function that makes **an array of 10 survey answers for one  department**. It should define an empty array and call the function from step 2 to add a randomly selected survey response into the empty array. You will need to repeat this procedure 10 times so that the array goes from empty to having 10 randomly selected survey answers.

4) Create a third function that pushes makes **the final array for the survey answers of all 5 of the departments**. It should define an empty array and call the function from step 3 to add a 10-items department array into the empty array. You will need to repeat this procedure 5 times so that the array goes from empty to having 5 department survey answer arrays.

By the end you will have something like the function below:

```javascript
var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  return array;
};
```
5) Show your result in the console.


## Iteration 2 - Harry Potter's Birthdays

Browsing through the Internet, we've found a very messy array with the birthdays of Harry Potter's friends and enemies.

![Harry Potter picture](https://i.imgur.com/O0DGqAa.png)

Take a look at the `harryPotter.js` array. It seems that the creator didn't have a good grasp on data structure design, but we've figured out what they were going for. In this array, every character's name is followed immediately by their birthday.

Let's organize these Harry Potter character birthdays. Unlike in Harry's world, we can't simply cast [*Scourgify*](http://harrypotter.wikia.com/wiki/Scouring_Charm). Luckily we are programmers and we can invoke the magic of JavaScript!

1) Create a function that receives the messy birthday array and returns a new, two-dimensional array with a bit more structure. The new array should have inside several small arrays: one for each character. Each of the internal small arrays should have the name of one character and their birthday.

2) Now that we have our two-dimensional array, we realized that some characters and their birthdays were missing. After a little more digging, we found another array with more birthdays from the book. Paste it into your JavaScript file.

```javascript
var moreBirthdays = [ "Lily Evans", "30 January", "James Potter", "27 March",
                      "Dudley Dursley", "30 June", "Tom Riddle", "31 December" ];
```

3) Luckily, the `moreBirthdays` array follows the same structure as the previous array. That means we can use our function from step 1 to restructure the birthdays into a second two-dimensial array.

4) Combine the contents of the two-dimensional array from step 1 and the two-dimensional array from step 3 so that there is one big two-dimensional array with all the pairings of characters and their birthdays.


## Iteration 3 - The Password Problem

Coming up with new passwords is ALWAYS a pain. You know what else is a pain? Writing code to check users' passwords. Every rookie needs to dip their toes into password validation at some point. Today it's your day.

![eCard about Passwords](https://i.imgur.com/CJHtpLw.png)

Rules we will enforce on our users' passwords:

1. No character can be used more than once.
2. Only digits are allowed. No letters or special characters or anything else.
3. We will cut all passwords down to 10 characters if the user gives us a password that exceeds that length.

**Unique characters:** Create a function that checks that each character only appears once in the password. It should receives a password and display _Ouch, bad password._ in the console if there are any repeated characters. Otherwise, it should display _Good password._ in the console.

```javascript
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 //your code goes here
};

noRepeatChar(goodPsswd);
// "Good password."

noRepeatChar(badPsswd);
// "Ouch, bad password."
```

**Only numbers:** Create a function that checks that a password only has numbers. It should receives a password and display _Ouch, bad password._ in the console if there are any characters that aren't numbers. Otherwise, it should display _Good password._ in the console.

```javascript
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
 //your code goes here
};

onlyNumbers(goodPsswd);
// "Good password."

onlyNumbers(badPsswd);
// "Ouch, bad password."
```

**Ten digits only:** Create a function thats trim the password down to only 10 digits. The function should receive a password, discard all characters after the 10th (index 9 of the string) and display the trimed password in the console.

```javascript
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
};
trimPassword(badPsswd);
// "1234567890"
```

## Iteration 4 - Abbey Road Studios

Abbey Road Studios opened in 1931. Through the years, the amount of data they've been collecting is huge. We found a [list of recordings made at Abbey Road Studios](https://en.wikipedia.org/wiki/List_of_recordings_made_at_Abbey_Road_Studios), but we aren't sure if it's actually an important place for music or if its fame is just a result of the hype created by The Beatles.

![Abbey Road front door](https://i.imgur.com/1kRBdy4.jpg)

Take a look at the data object located in the `abbeyRoad.js` file in your `lib/` folder.

**November looks like a good month:** In the 30's, they used to gather information about which months recordings were made. Write a function that returns an array of the names of all the artists who recorded in Abbey Road during the month of November.

```javascript
var novemberArtists = function () {
  //your code
};
// Don't forget to invoke the function to see the result
```

**Artists like to repeat:** Write a function that returns the name of the artist who has recorded in Abbey Road the most.

```javascript
var bestArtist = function () {
  //your code
};
// Don't forget to invoke the function to see the result
```

**The Beatles and Abbey Road:** Write a function that returns the song object for the last recording of the four from Liverpool at Abbey Road Studios.

```javascript
var lastBeatlesSong = function () {
  //your code
};
// Don't forget to invoke the function to see the result
```

**Sixties crazyness:** The sixties were a crazy decade. Write a function that returns the object the last song that was recorded in Abbey Road Studios in the 1960's.

```javascript
var sixtiesSong = function () {
  //your code
};
// Don't forget to invoke the function to see the result
```

## Summary

Collection methods are really useful.

## Extra Resources


- [Inside Abbey Road with Google](https://insideabbeyroad.withgoogle.com/en) - Only if you have a lot of spare time... you can find a virtual tour created by Google to the guts of the Abbey Road Studios 🙂
