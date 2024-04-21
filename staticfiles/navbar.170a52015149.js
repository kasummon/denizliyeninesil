let dropdownList = document.querySelectorAll('.dropdown-list');
let plus = document.querySelectorAll('.plus');
let dropdown = document.querySelector('.dropdown');
let hamburger = document.querySelector('.ham-menu');

for (let index = 0; index < dropdownList.length; index++) {
    const element = dropdownList[index];
    plus[index].addEventListener('click',(e) => {element.classList.toggle('open');
                                                plus[index].classList.toggle('open');})
};

hamburger.addEventListener('click', () => {dropdown.classList.toggle('dropped');
                                            hamburger.classList.toggle('dropped')})