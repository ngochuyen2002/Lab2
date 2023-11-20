// Function to update window size values
function updateWindowSize() {
    // Get window width and height
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
    // Update HTML elements with the current values
    document.getElementById('width').textContent = windowWidth;
    document.getElementById('height').textContent = windowHeight;
  }
  
  // Initial call to set initial values
  updateWindowSize();
  
  // Event listener for window resize
  window.addEventListener('resize', function() {
    // Update values whenever the window is resized
    updateWindowSize();
  });
  