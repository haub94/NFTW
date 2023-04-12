/** @type {import('./$types').Actions} */

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData();

        let formData = new FormData();
        formData.append('firstname', data.get('firstname') || '');
        formData.append('lastname', data.get('lastname') || '');
        formData.append('email', data.get('email') || '');

        /*const response = fetch('https://script.google.com/macros/s/AKfycbxPfg9IDPvMa__3Q4kTFjrIAI93XBbEREGH85YxwBjj-B-YSsZNHWo62qnf2R7ld_0/exec', {
            method: 'POST',
            body: formData
        }); */

        console.log('formData :>> ', formData);

        return { success: true };
    }
};


