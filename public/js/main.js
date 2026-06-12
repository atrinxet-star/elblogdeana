function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', function(e) {
  const nav = document.getElementById('navLinks');
  if (nav && nav.classList.contains('open') && !e.target.closest('.navbar')) {
    nav.classList.remove('open');
  }
});
