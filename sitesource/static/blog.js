let blogOuter = document.querySelector('.blog-outer');
let leftButton = document.querySelector('.left-slide-button');
let rightButton = document.querySelector('.right-slide-button');
let middleBox = document.getElementById('middle-box');
let blogContainer = document.querySelectorAll('.blog-container');
let say = 0;
oldVal = 0;
let divWidthMultipler = Math.floor(blogContainer.length/5);
let categoryText = document.getElementById('category-text');
let categoryTextBox = document.getElementById('category-text-box');
let categoryContainer = document.getElementById('categories-container');
if (Math.floor(blogContainer.length/5) == blogContainer.length/5) {
    divWidthMultipler = Math.floor(blogContainer.length/5)-1;
}

leftButton.addEventListener('click',cardGeri);
rightButton.addEventListener('click',cardIleri);

blogMover();
navButton();

if (screen.width <= 1024) {
    categoryText.addEventListener('click',categoryExtender);
    categoryText.addEventListener('mouseout',categoryNarrover);
};

function categoryExtender(){
    categoryContainer.classList.toggle('active');    //categoryText.classList.toggle('active');
}

function categoryNarrover(){
    categoryContainer.classList.remove('active');
}

function cardGeri(){ 
    say--;
    blogMover();
};

function cardIleri(){    
    say++;
    blogMover();
};

function navButton () {
    for (let i = 0; i < divWidthMultipler+1; i++) {
        
    let dotBox = document.createElement ('div');
    let buttons = document.createElement ('button');   

    buttons.addEventListener('click',() => {say = i; blogMover();});
    /*buttons.addEventListener('click',() => {buttons.style.backgrounColor = 'rgb(0,0,0)';});*/   

    dotBox.appendChild(buttons);
    dotBox.classList.add('dot-box-blog');
    dotBox.classList.add('bg-pri-2');      

    middleBox.appendChild(dotBox);
    };
};

document.getElementsByClassName('dot-box-blog')[say].classList.add('bg-pri-3');

function blogMover () {

    blogOuter.style.transform = `translateX(-${(say*100)+(say*2)}%)`;

    //console.log((say*100)+(say*2));

    leftButton.addEventListener('click',cardGeri);
    rightButton.addEventListener('click',cardIleri);

    if (say == 0) {
        leftButton.removeEventListener('click',cardGeri);
    };

    if (say == divWidthMultipler){
        rightButton.removeEventListener('click',cardIleri);
    };

    if (oldVal != say){
        document.getElementsByClassName('dot-box-blog')[oldVal].classList.remove('bg-pri-3');
        document.getElementsByClassName('dot-box-blog')[say].classList.add('bg-pri-3');
    }
    oldVal = say;

};