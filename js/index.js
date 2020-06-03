// Your code goes here

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

let firstImg = document.getElementsByClassName('img-content')[0].querySelector('img');
firstImg.addEventListener('mouseover', (event) => {
    event.target.style.border = 'solid red 2px';
});

document.addEventListener('keydown', (event) => {
    if (event.key == '1'){
        document.body.style.backgroundColor = 'aqua';
    }
})

let topImg = document.querySelector('img');
topImg.addEventListener('click', (event) => {
    event.target.style.opacity = '50%';
})

let buttons = document.getElementsByClassName('btn');
buttons[1].addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'red';
    event.stopPropagation()
})

buttons[0].addEventListener('click', (event) => {
    event.target.style.padding = "20%";
})

buttons[0].addEventListener('click', (event) => {
    event.target.style.width = "10px";
})

document.body.addEventListener('click', (event) =>{
    document.body.style.backgroundColor = 'green';
})

let foot = document.getElementsByTagName('footer')
foot[0].addEventListener('mouseover', (event) => {
    event.target.style.color= 'red';
})

topImg.addEventListener('dblclick', (event) => {
    event.target.style.border = 'dashed 5px pink';
})
