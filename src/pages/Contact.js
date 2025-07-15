import {useState} from 'react'


function Contact() {
    const [form, setForm] = useState({name:"",email:"",message:""});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = `Contact Form Message from ${form.name}`;
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
        const mailtoLink = `mailto:maxwellkirwa57@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setSubmitted(true);
        setForm({name:"",email:"",message:""});
        setTimeout(()=>setSubmitted(false), 3000);
    };
    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Contact Maxwell Kirwa</h1>
                <label htmlFor="name">Your Name</label>
                <input id="name" placeholder="Your Name"
                    value={form.name}
                    onChange={(e)=>setForm({...form, name: e.target.value})}
                    required
                />
                <label htmlFor="email">Your Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={(e)=>setForm({...form, email: e.target.value})}
                    required
                />
                <label htmlFor="message">Your Message</label>
                <textarea id="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={(e)=>setForm({...form, message: e.target.value})}
                    required
                ></textarea>
                <button type="submit">Send</button>
                {submitted && <div className="contact-success">Thank you, I'll get back to you soon!</div>}
            </form>
        </div>
    );
}
export default Contact;