function explore() {
    const camera = document.querySelector('.camera-image');
    const sound = document.getElementById('shutter-sound');
    const landing = document.querySelector('.landing-page');
    const site = document.querySelector('.main-site');
  
    // Play shutter sound
    sound.play();
  
    // Start zoom animation
    camera.classList.add('zoom-in');
  
    // After animation completes
    setTimeout(() => {
      landing.style.opacity = 0;
  
      setTimeout(() => {
        landing.style.display = 'none';
        site.style.display = 'block';
  
        setTimeout(() => {
          site.style.opacity = 1;
        }, 100);
      }, 600);
    }, 1200);
  }
  