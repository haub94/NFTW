/** @type {import('./$types').Actions} */

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

        /*const response = fetch('https://script.google.com/macros/s/AKfycbxPfg9IDPvMa__3Q4kTFjrIAI93XBbEREGH85YxwBjj-B-YSsZNHWo62qnf2R7ld_0/exec', {
            method: 'POST',
            body: formData
        }); */
 
        console.log('formData :>> ', formData);

        return { success: true };
    }
};


