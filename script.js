
const themeSelector = document.getElementById('themeSelector');
const savePrefBtn = document.getElementById('savePrefBtn');
const animateBtn = document.getElementById('animateBtn');
const animatedBox = document.getElementById('animatedBox');
const body = document.body;

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        themeSelector.value = savedTheme;
        applyTheme(savedTheme);
    }
    

    const animationState = localStorage.getItem('animationState');
    if (animationState === 'active') {
        animatedBox.classList.add('animate');
    }
});


savePrefBtn.addEventListener('click', () => {
    const selectedTheme = themeSelector.value;
    localStorage.setItem('themePreference', selectedTheme);
    applyTheme(selectedTheme);
    
  
    alert('Preferences saved! They will persist across browser sessions.');
});


function applyTheme(theme) {
   
    body.classList.remove('light-theme', 'dark-theme', 'blue-theme');
    

    switch (theme) {
        case 'dark':
            body.classList.add('dark-theme');
            break;
        case 'blue':
            body.classList.add('blue-theme');
            break;
        default:
            body.classList.add('light-theme');
    }
}


animateBtn.addEventListener('click', () => {
    animatedBox.classList.toggle('animate');
    
   
    if (animatedBox.classList.contains('animate')) {
        localStorage.setItem('animationState', 'active');
    } else {
        localStorage.setItem('animationState', 'inactive');
    }
});


animatedBox.addEventListener('mouseenter', () => {
    animatedBox.style.transform = 'scale(1.05)';
});

animatedBox.addEventListener('mouseleave', () => {
    animatedBox.style.transform = 'scale(1)';
});