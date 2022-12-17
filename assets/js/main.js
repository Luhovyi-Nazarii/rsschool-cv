document.addEventListener('DOMContentLoaded', function() {
document.getElementById('burger').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');   
})
document.querySelector('.nav-list').addEventListener('click', function () {
  document.querySelector('header').classList.toggle('open');
})
})