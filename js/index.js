// Your code goes here


const siteImgs = document.querySelectorAll('img');

// when hovered over imgs increase sale and return to normal when off
siteImgs.forEach(img=>{
    img.addEventListener('mouseover',()=>{
        img.style.transform='scale(1.1)';
    });

    img.addEventListener('mouseleave',()=>{
        img.style.transform='scale(1)';
    });
});

// on click imgs rotate 180 degrees
siteImgs.forEach(img=>{
    img.addEventListener('click',()=>{
        img.style.transform='rotate(180deg)'
    });
});

const siteTitle = document.querySelector('.logo-heading')

//  when title is clicked it changes to hi mom and color goes to purple
siteTitle.addEventListener('dblclick',()=>{
    siteTitle.textContent='HI MOM';
    siteTitle.style.color='purple';
});

const stopLinks=document.querySelectorAll('.nav-link')

// stops links from refreshing the page
stopLinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault();
    });
});

const buttons = document.querySelectorAll('.btn')

buttons.forEach(button=>{
    button.addEventListener('click',()=>{
        button.textContent='This Button actually does nothing'
    });
});

const body = document.querySelector('body')

body.addEventListener('click',()=>{
    body.style.backgroundColor="purple"
});

const topContainer = document.querySelector('.intro')

topContainer.addEventListener('click',()=>{
    topContainer.style.backgroundColor='red';
});

const textContainers = document.querySelectorAll('.text-content')

textContainers.forEach(container=>{
    container.addEventListener('click',()=>{
        container.style.backgroundColor='yellow';
    });
});

