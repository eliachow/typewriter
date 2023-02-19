/*
---- Animated Sentence ----
M1/Wk4/Animated Sentence: https://flex-web.compass.lighthouselabs.ca/workbooks/flex-m01w4/activities/387?journey_step=32

---- INSTRUCTIONS ----
In this activity, we are going to take a sentence and display it as an animation.

Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone

---- NOTES ----
    String.prototype.charAt() ---- returns a new string at the specified index
        ---- Used to identify that last index
    string.lastIndexOf(searchvalue) ---- method returns the index (position) of the last occurrence of a specified value in a string.
        ---- used charAt() as the search value


*/

// //1. Add a string to play with...
// const sentence = "hello there from lighthouse labs";


// //2. loop through characters - console.log output will print each letter on a new line
// const sentence = "hello there from lighthouse labs";
//     for (const char of sentence) {
//         console.log(char);
//     }

// //3. process.stdout.write output letter on the same line
// const sentence = "hello there from lighthouse labs";
//     for (const char of sentence) {
//         process.stdout.write(char);
//     }


// //4. Add a setTimeout call within the loop, to delay the character output a bit.
// const sentence = "hello there from lighthouse labs";
//     for (const char of sentence) {
//         setTimeout(() => {
//             process.stdout.write(char);
//         }, 1000) 
//     }

//5. Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter.
// const sentence = "hello there from lighthouse labs";
//     let timer = 500;
//     for (const char of sentence) {
//         //console.log(sentence.lastIndexOf(sentence.length - 1)); // output: -1
//         //console.log(sentence.charAt(sentence.length - 1)); //output: s
//         //console.log(sentence.lastIndexOf(sentence.charAt(sentence.length - 1))); //output: 31
//         if(char !== sentence.lastIndexOf(sentence.charAt(sentence.length - 1))) {        
//             timer += 500;
//             setTimeout(() => {
//                 process.stdout.write(char);
//             }, timer); 
//         } else {
//             timer += 500;
//             setTimeout(() => {
//                 console.log(char);
//             }, timer); 
//         }
//     }

// need a c loop to access index
const sentence = "hello there from lighthouse labs";
    let timer = 500;
    for(let i = 0; i < sentence.length; i++) {
        //console.log(sentence.lastIndexOf(sentence.charAt(sentence.length - 1))); // output 31
       if (i !== sentence.lastIndexOf(sentence.charAt(sentence.length - 1))) {
        timer += 500;
            setTimeout(() => {
                process.stdout.write(sentence[i]);
            }, timer); 
        } else {
            timer += 500;
            setTimeout(() => {
                console.log(sentence[i]);
            }, timer); 
       }
    }