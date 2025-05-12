function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const button = document.getElementById('themeToggleButton');
    if (button) {
        button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    }
    const buttons = document.querySelectorAll('#themeToggleButton, #themeToggleButtonRegister');
    buttons.forEach(button => {
        button.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

function toggleForm() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });
}
