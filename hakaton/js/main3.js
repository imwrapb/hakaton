let next1 = document.querySelector('.next1');
let prev1 = document.querySelector('.prev1');
let sec_o_img = document.querySelectorAll('.sec_o_img')
for (let i = 0; i < sec_o_img.length; i++) {
  sec_o_img[i].style.display = 'none'
}
sec_o_img[0].style.display = 'block'


next1.addEventListener('click', () => {
  if (i < 2) {
      sec_o_img[i].style.display = 'none'
      i++;
      sec_o_img[i].style.display = 'block'
  } else {
      sec_o_img[i].style.display = 'none'
      i = 0;
      sec_o_img[i].style.display = 'block'
  }
})
prev1.addEventListener('click', () => {
  if (i > 0) {
      sec_o_img[i].style.display = 'none'
      i--;
      sec_o_img[i].style.display = 'block'
  } else {
      sec_o_img[i].style.display = 'none'
      i = 2;
      sec_o_img[i].style.display = 'block'
  }
})



