function copyText() {
    var element = document.getElementById('myText');
    var range, selection, worked;
  
  
      selection = window.getSelection();        
      range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    
    
    try {
      document.execCommand('copy');
      alert('text copied');
    }
    catch (err) {
      alert('unable to copy text');
    }
  }