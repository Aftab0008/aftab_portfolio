import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.status);
  };

  return (
    <section id="contact" className="p-8 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 border"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            required
            className="w-full p-2 border"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
export default Contact;