<script lang="ts">
    import emailjs from '@emailjs/browser';
  
    let userName: string;
    let toMail: string;

    function log() {
        console.log('userName :>> ', userName);
        console.log('toMail :>> ', toMail);

        sendEmail(userName, toMail);
    }

    function sendEmail(name: string, mail: string) {
        console.log("sending mail in progress...");

        console.log('sendMail: userName :>> ', name);
        console.log('sendMail:  toMail :>> ', mail);

        emailjs.send('service_vzyr2ok', 
        'template_3sdt4dk', 
        {
            from_name: name,
            to_mail: mail
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
  
  <form on:submit|preventDefault={log}>
    <label>Name</label>
    <input type="text" name="user_name" bind:value={userName}>
    <label>Email</label>
    <input type="text" name="user_email" bind:value={toMail}>
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>