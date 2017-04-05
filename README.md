![](https://i.imgur.com/1QgrNNw.png)

# JS | Lodash Exercises

These exercises will help you to practice and discover some of the most useful functions Lodash provides.

To solve them, please refer to the formal [Lodash documentation](https://lodash.com/) and take a look at the files in the starter code in this repository.

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

You'll receive two files under the `lib/` folder. Keep them just how they are, they contain the data you will use in your exercise but they're not intended to be edited. Write your JavaScript in a new file and make sure you require it properly in the provided `html` file.

## Iteration 1 - The Office

![The Office picture](https://i.imgur.com/9g31Bwo.gif)

You work in a taxes office. Boring, right? And suddenly you discover you can use your extra time to learn how to code. An email arrives. Your bosses are sending a satisfaction survey. You decide to model the satisfaction of your coworkers.

As you have five departments with 10 people working in each department, your mission is to create a 5x10 array and fill it randomly with made up opinions to model the satisfaction survey results. Employees can be:

 - This is the best job ever
 - Satisfied.
 - At least I get paid.
 - I'm looking for another job.
 - I don't want to answer.


1) Create an array that matches these opinions.
 ```javascript=
 var opinions = [ "This is the best job ever",
                  "Satisfied",
                  "At least I get paid",
                  "I'm looking for another job",
                  "I don't want to answer"];
 ```

2) Create a function that randomly picks up one of these items in the `opinions` array.

3) Create a function that pushes the item into the array. You will need to repeat this procedure ten times to create an array of 10 opinions.

4) Create another function that pushes the 10-items-array into another array. You will need to do this five times to create the five departments. At the end you will have something like the function below:

```javascript=
var employeeSatisfaction = function () {
  // Steps 2, 3 and 4 here
  return array;
};
```

5) Show your result in the console.

:bulb: **Hint:** Look at the Lodash Array methods. Use `_.times` if you need to repeat an action.

## Iteration 2 - Harry Potter's Birthdays

Navigating through Internet, we found a very messy array with the birthdays of Harry Potter's friends and enemies.

![Harry Potter picture](https://i.imgur.com/O0DGqAa.png)

Take a look at the `harryPotter.js` array. It is so messy, they can't even remember which date belongs to whom. But we know each date follows each character's name.

Let's organize Harry Potter Character's Birthdays. Unfortunately, [*Scourgify*](http://harrypotter.wikia.com/wiki/Scouring_Charm) won't help us now, but Lodash could...

1) Create a function that receives an array and returns an array of two dimensions. Each internal array should have the name of one character and his date of birthday.


:bulb: **Hint:** Look at the Lodash Array methods.

2) Now that we have our two-dimensions array, we notice that some of the birthdays are missing. But we found another array with birthdays from the book.

```javascript
var moreBirthdays = ["Lily Evans", "30 January", "James Potter", "27 March",
                     "Dudley Dursley", "30 June", "Tom Riddle", "31 December"];
```

3) Create a function that add this array above to the first one you manipulated with the same format. The function should return an array with all the birthdays in pairs.

## Iteration 3 - The Password Problem

Yeah, yeah, to set a password is ALWAYS a big trauma. We will ask for a password to our users and we need to implement validation methods for this password.

![eCard about Passwords](https://i.imgur.com/CJHtpLw.png)

**Different characters:** create a function that receives a password and returns an error if every char in the password is not unique.

:bulb: **Hint:** Look at the Lodash Array methods. Use `_.times` if you need to repeat an action.

```javascript=
var goodPsswd = "1234567890";
var badPsswd = "1123456";
var noRepeatChar = function (password) {
 //your code goes here
};

noRepeatChar(goodPsswd);
noRepeatChar(badPsswd);
```

**Only numbers:** Create a function that receives a password and returns an error if the password has any character different than numbers.

```javascript=
var goodPsswd = "1234567890";
var badPsswd = "1a234567890";
var onlyNumbers = function () {
 //your code goes here
}
onlyNumbers(goodPsswd);
onlyNumbers(badPsswd);
```

**Ten digits only:** Create a function that trim the password and turns it into a 10 digits password. The function should keep the first 10 digits and discard the rest of them.

```javascript=
var goodPsswd = "1234567890";
var badPsswd = "12345678901234567890";
var trimPassword = function (password) {
 //your code goes here
}
trimPassword(badPsswd);
```

## Iteration 4 - Abbey Road Studios

Abbey Road Studios opened in 1931. Through all these years, the amount of data they've been collecting is huge. We found a [list of recordings made at Abbey Road Studios](https://en.wikipedia.org/wiki/List_of_recordings_made_at_Abbey_Road_Studios) but we are not sure if it is actually an important place for music or if its fame is just a result of the hype created by The Beatles.

![Abbey Road front door](https://i.imgur.com/1kRBdy4.jpg)

Lodash is a great tool for retrieving information. But first, take a look at the data object located in the `abbeyRoad.js` file in your `lib` folder.

**November looks like a good month:** In the 30's, they use to gather information about the months when the recordings where made. Get the artist who recorded the most on November in Abbey Road.

```javascript=
var novemberArtists = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

**Artists like to repeat:** Get the artist who recorded the most times in Abbey Road.

```javascript=
var bestArtist = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

**The Beatles and Abbey Road:** When did the four of Liverpool recorded their last song in Abbey Road Studios?

```javascript=
var lastBeatlesSong = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

**Sixties crazyness:** The sixties were a crazy decade. Could you retrieve the last song it was recorded in Abbey Road Studios in the decade of 1960's?

```javascript=
var sixtiesSong = function () {
  //your code
};
//Remember to execute the function to actually assing the value to the var.
```

## Summary

Lodash could help you, specially when starting to code, to think in a more functional manner. It is also a good tool to avoid repetition and speed up coding time. Through these exercises you got familiar with the Lodash documentation and some of the over a 100 functions it provides.

## Extra Resources

- [Devdocs.io](http://devdocs.io/lodash~4/)
- [Inside Abbey Road with Google](https://insideabbeyroad.withgoogle.com/en) - Only if you have a lot of spare time... you can find a virtual tour created by Google to the guts of the Abbey Road Studios 🙂
