// JavaScript to handle the hover effect
document.getElementById('highlightLink').addEventListener('mouseenter', function() {
  var textToHighlight = document.getElementById('textToHighlight');
  var words = textToHighlight.getElementsByTagName('strong');

  // Add the 'highlight' class to bold words
  for (var i = 0; i < words.length; i++) {
    words[i].classList.add('highlight');
  }
});

document.getElementById('highlightLink').addEventListener('mouseleave', function() {
  var textToHighlight = document.getElementById('textToHighlight');
  var words = textToHighlight.getElementsByTagName('strong');

  // Remove the 'highlight' class when mouse leaves
  for (var i = 0; i < words.length; i++) {
    words[i].classList.remove('highlight');
  }
});
