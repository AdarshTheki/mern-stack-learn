import React from 'react';

const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form';

export default function ContactForm() {
    async function submitForm(event) {
        event.preventDefault();
        const form = event.target;
        try {
            const formData = new FormData(form);
            const response = await fetch(SUBMIT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                }),
            });
            const text = await response.text();
            alert(text);
        } catch (_) {
            alert('Error submitting form!');
        }
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='name-input'>Name</label>
                    <input id='name-input' name='name' type='text' />
                </div>
                <div>
                    <label htmlFor='email-input'>Email</label>
                    <input id='email-input' name='email' type='email' />
                </div>
                <div>
                    <label htmlFor='message-input'>Message</label>
                    <textarea id='message-input' name='message'></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    );
}
