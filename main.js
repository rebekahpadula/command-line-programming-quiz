var prompt = require('prompt-sync').prompt; 
var score = 0;
var start = Date.now();

console.log("What is your name?");

var name = prompt();

console.log('Hi, ' + name);

console.log('Question 1: What does REPL stand for? Read Eval Print Loop, Recognize Eval Print Language?');

var answer1 = prompt();

if (answer1.toLowerCase() === 'read eval print loop') {
	console.log('Correct!');
	score++;
} else {
	console.log('Your answer ' +answer1 + ' is wrong');
}

console.log('Question 2: What does CSS stand for? Creative Style Sheet, Cascading Style Sheet, Computer Style Sheet');

var answer2 = prompt();

if (answer2.toLowerCase() === 'cascading style sheet') {
	console.log('Yep!');
	score++
} else {
	console.log('Your answer ' + answer2 + ' was incorrect');
}

console.log('Question 3: Which CSS property controls the text size? text-style, font-size, text-style, fontsize');

var answer3 = prompt();

if (answer3.toLowerCase() === 'font-size') {
	console.log('Yass!');
	score++
} else {
	console.log('Nah bro. The correct answer is font-size');
}

console.log('Question 4: In CSS, how do you select an element with an id? "block1": .block1, *block1, #block1');
 
var answer4 = prompt();

if (answer4.toLowerCase() === '#block1') {
	console.log('Yass!');
	score++
} else {
	
	console.log('No!');
}

console.log('Question 5: What is the default for the position property? Fixed, Static, Relative, or Absolute');

var answer5 = prompt();

if (answer5.toLowerCase() === 'static') {
	console.log('Correct!');
	score++
} else {
	console.log('Wrong! The correct answer is static.');
}

console.log('Question 6: In Javascript, which operator is used for assigning a value to a variable? =, *, -');

var answer6 = prompt();

if (answer6 === '=') {
	console.log('Correct!');
	score++
} else {
	console.log ('Your answer ' + answer6 + ' is incorrect');
}

console.log('Question 7: In Javascript, what does && stand for? or, and, increase by one');

var answer7 = prompt()

if (answer7.toLowerCase() === 'and') {
	console.log('Yep!');
	score++
} else {
	console.log('Sorry, that is incorrect');
} 

console.log('Question 8: Screen, print, and all are what? Media Features, Media Queries, Media Types');

var answer8 = prompt()

if (answer8.toLowerCase() === 'media types') {
	console.log ('Correct!');
	score++
} else {
	console.log('Your answer ' + answer8 + ' is incorrect');
}

console.log('Question 9: In Javascript, 2 is a: variable, assignment expression, literal value');

var answer9 = prompt()

if (answer9.toLowerCase() === 'literal value') {
	console.log ('Yep!')
	score++
} else {
	console.log('Your answer ' + answer9 + ' is incorrect');
} 

console.log('Question 10: What does HTML stand for? Hyperlinks and Text Markup Language, Home Tool Markup Language, Hyper Text Markup Language');

var answer10 = prompt()

if (answer10.toLowerCase() === 'hyper text markup language') {
	console.log('Correct!');
	score++
} else {
	console.log('Sorry, your answer ' + answer10 + ' is incorrect. The correct answer is Hyper Text Markup Language.');
}

console.log ('Question 11: In HTML, which tag is used to display a picture? picture, image, img, src');

var answer11 = prompt()

if (answer11.toLowerCase() === 'img') {
	console.log('Correct!');
	score++ 
} else {
		console.log('Sorry that is incorrect');
}


console.log ('Question 12: Which tag lets you make a bulleted list? ol, ul, list');

var answer12 = prompt()

if (answer12.toLowerCase() === 'ul') {
	console.log('Correct!');
	score++
}	else {
		console.log('Nope!');
}


console.log ('Question 13: Which tag lets you make a numbered lst? ol, ul, list');

var answer13 = prompt()

if (answer13.toLowerCase() === 'ol') {
	console.log('Yep!');
	score++
} else {
		console.log('No soup for you!');
}

console.log ('Question 14: Choose the smallest heading: h2. h6, h1, h3');

var answer14 = prompt()

if (answer14.toLowerCase() === 'h6') {
	console.log('Correct!');
	score++
} 	else {
		console.log('Yaas!');
}

console.log ('Question 15: Text within a strong tag is: bold, italic, indented');

var answer15 = prompt()

if (answer15.toLowerCase() === 'bold') {
	console.log('Correct!');
	score++
}	else {
		console.log('Noooooooo');
}

var stop = Date.now();
var time =((stop - start) / 1000/ 60);
console.log('You took ' + stop - start +' to finish this quiz!');
console.log('Your score is')
console.log(score);
console.log(score/15*100 +'%')
