document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var alertMessage = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;
    
    alert(alertMessage);
  });
  