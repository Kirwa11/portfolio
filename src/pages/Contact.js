import {useState} from 'react';
import emailjs from 'emailjs-com';

function Contact() {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send email using EmailJS
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                {
                    to_name: "Maxwell Kirwa",
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message
                },
                'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
            );

            // Reset form and show success message
            setSubmitted(true);
            setForm({name: "", email: "", message: ""});
            setError(null);
            
            // Clear success message after 3 seconds
            setTimeout(() => setSubmitted(false), 3000);
        } catch (err) {
            setError("Failed to send message. Please try again later.");
            console.error('Error sending email:', err);
        }
    };

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Contact Maxwell Kirwa</h1>
                {error && <div className="contact-error">{error}</div>}
                <label htmlFor="name">Your Name</label>
                <input 
                    id="name" 
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    required
                />
                <label htmlFor="email">Your Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    required
                />
                <label htmlFor="message">Your Message</label>
                <textarea 
                    id="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    required
                ></textarea>
                <button type="submit">Send</button>
                {submitted && <div className="contact-success">Thank you, I'll get back to you soon!</div>}
            </form>
        </div>
    );
}

export default Contact;