// Your code goes here


const siteImgs = document.querySelectorAll('img');

siteImgs.forEach(img=>{
    img.addEventListener('mouseover',()=>{
        img.style.transform='scale(1.1)';
    });

    img.addEventListener('mouseleave',()=>{
        img.style.transform='scale(1)';
    });
});

siteImgs.forEach(img=>{
    img.addEventListener('click',()=>{
        img.style.transform='rotate(180deg)'
    });
});

const siteTitle = document.querySelector('.logo-heading')

siteTitle.addEventListener('dblclick',()=>{
    siteTitle.textContent='HI MOM';
    siteTitle.style.color='purple';
})