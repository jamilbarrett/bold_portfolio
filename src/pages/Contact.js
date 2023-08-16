import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (emailValue && !/\S+@\S+\.\S+/.test(emailValue)) {
            alert('Invalid email address');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            alert('Please fill in all required fields');
            return;
        }

        // Handle form submission here
        console.log('Form submitted:', name, email, message);
    };

    return (
        <div className="flex">
            <div className="p-2">
                <img
                    src="dega.png"
                    alt="Bodega NYC"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="my-30 w-1/2 p-8">
                <form className='my-20' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-4 px-4 py-2 border rounded-lg"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full mb-4 px-4 py-2 border rounded-lg"
                        required
                        aria-required="true"
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full mb-4 px-4 py-2 border rounded-lg"
                        required
                        aria-required="true"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 border text-white rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
