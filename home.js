const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-Btn');

// toggleBtn.addEventListener('click', () => {
//     sidebar.classList.toggle('active');
// });

const el = document.getElementById('overlayBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}