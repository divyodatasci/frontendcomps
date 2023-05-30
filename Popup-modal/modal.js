// Check if the modal should be displayed
function shouldDisplayModal() {
    return !getCookie('modalClosed');
  }
  
  // Set a cookie with the given name, value, and expiration days
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  
  // Get the value of a cookie by name
  function getCookie(name) {
    console.log('gettingcookie');
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  
  // Open the modal
  function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setCookie('modalClosed', 'true', 365);
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
    setCookie('modalClosed', 'true', 365); // Set cookie to remember modal is closed
  }
  
  // Event listener for closing the modal
  document.addEventListener('click', function(event) {
    var closeButton = document.getElementsByClassName('close')[0];
    if (event.target === closeButton) {
      closeModal();
    }
  });
  // Check if the modal should be displayed and open it if necessary
  if (shouldDisplayModal()) {
    openModal();
  }
  