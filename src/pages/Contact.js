import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        const emailValue = e.target.value;
        setEmail(emailValue);

        if (emailValue && !/\S+@\S+\.\S+/.test(emailValue)) {
            alert('Invalid email address');
        }
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
                <form className='my-20'>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full mb-4 px-4 py-2 my- border rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full mb-4 px-4 py-2 border rounded-lg"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full mb-4 px-4 py-2 border rounded-lg"
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
