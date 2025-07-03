import {useState} from "react";


function Contact() {
    const [form, setForm] = useState({name:"",message:""});

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Thanks ${form.name} we have receive your messages!`);
        setForm({name: "", message:""});
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Contact me</h2>
            <input placeholder="your Name" value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} required />
            <textarea placeholder="your Message" value={form.message} onChange={(e)=>setForm({...form,message: e.target.value})} require></textarea>
            <button type="submit">Send</button>
        </form>
    );
}
export default Contact;