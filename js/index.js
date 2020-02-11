// Your code goes here


const siteImgs = document.querySelectorAll('img');

siteImgs.forEach(img=>{
    img.addEventListener('mouseenter',()=>{
        img.style.transform='scale(1.1)';
    });

    img.addEventListener('mouseleave',()=>{
        img.style.transform='scale(1)';
    });
});