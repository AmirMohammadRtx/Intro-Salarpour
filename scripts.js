function toggleDrawer() {
    const drawer = document.getElementById('drawer');
    const currentRight = drawer.style.right;
  
    // اگر کشو در حالت بسته است، آن را باز کن
    if (currentRight === '0px') {
      drawer.style.right = '-250px';
    } else {
      drawer.style.right = '0px';
    }
  }
  
   particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80
      },
      "size": {
        "value": 3
      },
      "color": {
        "value": "#ffffff"
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2
      }
    }
  });