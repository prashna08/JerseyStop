  function toggleDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const btn = document.getElementById('hamburger');
    drawer.classList.toggle('open');
    btn.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  }
  function closeDrawer() {
    const drawer = document.getElementById('mobileDrawer');
    const btn = document.getElementById('hamburger');
    drawer.classList.remove('open');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }