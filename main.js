//const img =document.querySelector('#img')
//img.addEventListener('click', () =>{
//img.classList.toggle('zoomed')
//})  
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.Arabicblack');

  images.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('zoomed');
    });
  });
});