<script lang="ts">
    import emailjs from '@emailjs/browser';
    import { dev } from '$app/environment';
  
    let userName: string;
    let toMail: string;

    function mailingSequence() {
        if (dev) {
            console.log("mailing data:")
            console.log('userName :>> ', userName);
            console.log('toMail :>> ', toMail);

            console.log("call emailJS function to send mail");
        }

        sendEmail(userName, toMail);
    }

    function sendEmail(name: string, mail: string) {
        emailjs.send('service_vzyr2ok', 
        'template_3sdt4dk', 
        //template variables
        {
            from_name: name,
            to_mail: mail
        }, 
        'YYaLHQ2Bd6V9Rk4vS')
        
        .then((result) => {
           //trigger here green success banner!!!
            if (dev) {
                console.log('SUCCESS!', result.text);
            }
        }, (error) => {
            //trigger here red error banner!!!
            if (dev) {
                console.log('FAILED...', error.text);
            } 
        });
    }

  </script>
  
  <form on:submit|preventDefault={mailingSequence}>
    <label>Name</label>
    <input type="text" name="user_name" bind:value={userName}>
    <label>Email</label>
    <input type="text" name="user_email" bind:value={toMail}>
    <label>Message</label>
    <textarea name="message"></textarea>
    <input type="submit" value="Send">
  </form>