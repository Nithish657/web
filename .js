const toggleBtn = document.getElementById('theme-toggle');
function searchCourses() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    alert(`You searched for: ${query}`);
  }
  
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
