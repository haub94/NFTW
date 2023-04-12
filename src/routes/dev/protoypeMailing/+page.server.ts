/** @type {import('./$types').Actions} */

import Email from "./+page.svelte";

//mail: haubie94@googlemail.com
//smtp-pw: 8BB05961DBB4C043199C5060FDA8873ECC84
//server: smtp.elasticemail.com
//port: 2525
//pw: zasdat-9camno-gEvduq
//token: 94760a15-abe9-41f9-93c9-10b847421b96



export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const firstName: FormDataEntryValue | null = data.get('firstname');
        const lastName: FormDataEntryValue | null = data.get('lastname');
        const email: FormDataEntryValue | null = data.get('email');

        let formData = new FormData();
        formData.append('firstname', firstName || '');
        formData.append('lastname', lastName || '');
        formData.append('email', email || '');

       
        

        /* SmtpJS.com - v3.0.0 */
       

        
            Email.send({
                SecureToken : "94760a15-abe9-41f9-93c9-10b847421b96",
                To : "haubie94@web.de",
                From : "haubie94@googlemail.com",
                Subject : "This is the subject",
                Body : "And this is the body with name" //+ {firstname} + " " + {lastname} + " Ende"
            }).then(
              message => alert(message) //+ " " + {firstname} + " " + {lastname} + " " + {email})
            );
            
        


        return { success: true };
    }
};


