
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


//yes i put my notes here i learn as i go leave me alone!!111!
//ternary operators: basically easier way of writing if else statememnts
// if you wanna say: if age is > 10, name = pedrp
//--> let name = age > 10 && "pedrp";
//if you wanna say: name is "pedrp" if age is not > 10 (if the condition is satisfied, then don't execute)
//--> let name = age > 10 || "pedrp";
// if you wanna do if else, "if age is greater than 10, name is pedp, else its jack"
// -->let name = age > 10 ? "perp" : "jack";
//---> here, "?" represents the "if", whats after is if the if is true, and what's after the ":" is the else

