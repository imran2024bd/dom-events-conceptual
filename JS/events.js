console.log('This is separate js file');
// option 01 : directly set on the HTML element
// <button onclick="console.log(65);">Another Click</button>


// option 02 : add on click function on the HTML element
// on click by function for red make
// <button onclick="makeRed()">Make Red</button>
// function makeRed() {
//     document.body.style.backgroundColor = 'red';
// }


// option 03

    // const makeBluebutton = document.getElementById('make-blue');
    // // console.log('make blue button');
    // makeBluebutton.onclick = makeBlue;
    // function makeBlue() {
    //     document.body.style.backgroundColor = 'blue';
    // }




// option 03 : alternative

// const purpleButton  = document.getElementById('make-purple');
//     // console.log('makePurple');
// purpleButton.onclick = function makePurple() {
//     document.body.style.backgroundColor = 'purple';
// }

// option 04

// const pinkButton = document.getElementById('make-pink');
// // console.log('pinkButton');
// pinkButton.addEventListener("click" , makePink)
// function makePink() {
//     document.body.style.backgroundColor = 'pink';
// }


// option 04 : alternative

// const makeGreenButton = document.getElementById('make-green');
//     makeGreenButton.addEventListener("click", function makeGreen() {
//         document.body.style.backgroundColor = 'green'
//     })



// option 04 : Final

// document.getElementById('make-goldenrod').addEventListener("click", function makeGold() { document.body.style.backgroundColor = 'goldenrod'
        
//     })