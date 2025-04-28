const button = document.querySelector('.celebrate-btn');
const background = document.querySelector('.background');

button.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) { // Number of "1095"s
        createFloating1095();
    }
});

function createFloating1095() {
    const floating = document.createElement('div');
    floating.classList.add('floating-1095');
    floating.innerText = '1095';
    
    // Random position
    floating.style.top = Math.random() * window.innerHeight + 'px';
    floating.style.left = Math.random() * window.innerWidth + 'px';
    
    // Random size
    const size = Math.random() * 10 + 10; // between 10px and 20px
    floating.style.fontSize = size + 'px';
    
    // Random animation duration
    floating.style.animationDuration = (Math.random() * 3 + 3) + 's'; // between 3s and 6s
    
    background.appendChild(floating);
    
    // Remove after animation to clean up
    setTimeout(() => {
        floating.remove();
    }, 6000);
}
