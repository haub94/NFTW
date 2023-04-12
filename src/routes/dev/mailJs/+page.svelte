<script>
    import emailjs from '@emailjs/browser';
  
    function sendEmail(e) {
        emailjs.send('service_vzyr2ok', 
        'template_3sdt4dk', 
        {
            from_name: "markus",
            to_mail: "haubie94@web.de"
        }, 
        'YYaLHQ2Bd6V9Rk4vS')
        
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }

/*
      emailjs.sendForm('service_vzyr2ok', 'template_3sdt4dk', e.target, 'YYaLHQ2Bd6V9Rk4vS')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        }); 
    }*/
  </script>
  
  <form on:submit|preventDefault={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>