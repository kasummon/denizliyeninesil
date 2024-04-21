let leftArrowButton = document.querySelector('.left-slide-button');
let rightArrowButton = document.querySelector('.right-slide-button');
let sliderInner = document.getElementById("slider-inner");
let textInner = document.getElementById("text-inner-container");
let imageCounter = document.querySelectorAll(".img-container").length;
let say = 0;
let oldVal = 0;
let middleBox = document.getElementById('middle-box');
let moverMultiplerImage = 100 / document.querySelectorAll(".img-container").length;
let moverMultiplerText = 100 / document.querySelectorAll("#text-inner-container .text-wrapper").length;
let textInnerContainer = document.getElementById('text-inner-container');
let textCounter = document.querySelectorAll('#text-inner-container .text-wrapper').length;
let igCapsule = document.getElementById('capsule');
let igBox = document.querySelectorAll('.ig-box');
let igLeftButton = document.querySelector('#ig-left-button');
let igRightButton = document.querySelector('#ig-right-button');
let mod = igBox.length % 7;
let igMultipler = 0;
let igSay = 0;
let igOldVal = 0;

console.log('mod : ', mod)
/*
if (mod == 0) {
    igMultipler = igBox.length / 5;
    igCapsule.style.width = `${igMultipler * 100}%`;
};

if (mod =! 0) {
    igMultipler = Math.floor(mod)+1;
    igCapsule.style.width = `${igMultipler * 100}%`;
};

*/






console.log('text sayısı :' , textCounter);
console.log('img-say :', document.querySelectorAll(".img-container").length);

textInnerContainer.style.width = `${textCounter*100}%`;
sliderInner.style.width = `${document.querySelectorAll(".img-container").length*100}%`;


leftArrowButton.addEventListener('click',cardGeri);
rightArrowButton.addEventListener('click',cardIleri);

igLeftButton.addEventListener('click',igGeri);
igRightButton.addEventListener('click',igIleri);

if (screen.width <= 1024) {
    kutusay = 2;
}
else {
    kutusay = 7;
}
igMultipler = igBox.length/kutusay;
igCapsule.style.width = `${igMultipler * 100}%`;
let rotationMultipler = 100 / igBox.length;
console.log('rotation multip: ', rotationMultipler);
console.log('ig multip: ', igMultipler);

navButton();
cardMover();

flow();

function flow() {
    setTimeout(() => {
        cardIleri();
        flow();
    }, 5500);
};

//cardSvgSelector();



function cardIleri (){
    say = say+1;
    cardMover();    
};

function cardGeri (){    
    say = say-1;
    cardMover();
};

function cardMover (){

    if (say > document.querySelectorAll(".img-container").length-1){
        say = 0;
    };

    if (say < 0){
        say = document.querySelectorAll(".img-container").length-1;
    };  

    document.getElementsByClassName('dot-box')[say].classList.add('bg-pri-3');
    document.getElementsByClassName('text-wrapper')[say].classList.add('opacity-1');
    document.getElementsByClassName('text-wrapper')[say].classList.remove('opacity-0');

    sliderInner.style.translate = `-${say*moverMultiplerImage}%`;
    textInner.style.translate = `-${say*moverMultiplerText}%`;
    

    console.log(say);

    if (oldVal != say){
        document.getElementsByClassName('dot-box')[oldVal].classList.remove('bg-pri-3');
        document.getElementsByClassName('dot-box')[say].classList.add('bg-pri-3');

        document.getElementsByClassName('text-wrapper')[oldVal].classList.remove('opacity-1');
        document.getElementsByClassName('text-wrapper')[oldVal].classList.add('opacity-0');
        document.getElementsByClassName('text-wrapper')[say].classList.add('opacity-1');
        document.getElementsByClassName('text-wrapper')[say].classList.remove('opacity-0');
    }
    oldVal = say;
    
};

function navButton () {
    for (let i = 0; i < imageCounter; i++) {
        
    let dotBox = document.createElement ('div');
    let buttons = document.createElement ('button');   

    buttons.addEventListener('click',() => {say = i; cardMover();});
    /*buttons.addEventListener('click',() => {buttons.style.backgrounColor = 'rgb(0,0,0)';});*/   

    dotBox.appendChild(buttons);
    dotBox.classList.add('dot-box');    

    middleBox.appendChild(dotBox);    
    };
};

function igIleri() {
    igSay++;
    rotator();
    console.log('rightclick');
}

function igGeri() {
    igSay--;
    rotator();
    console.log('leftclick');
}


function rotator() {
    if (igSay > igBox.length-kutusay) {
      igSay = 0;  
    };

    if (igSay < 0){
        igSay = igBox.length-kutusay;
    }

    igCapsule.style.transform = `translateX(-${igSay*rotationMultipler}%)`;
    console.log('movement value: ' , igSay*rotationMultipler);
}




