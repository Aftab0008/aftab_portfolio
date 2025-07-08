import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  // 🔄 Load existing comments
  useEffect(() => {
    fetch('http://localhost:5000/comment')
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error("Failed to load comments:", err));
  }, []);

  // 📝 Submit a comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment }),
      });
      setComment('');
      const updated = await fetch('http://localhost:5000/comment').then(res => res.json());
      setComments(updated);
    } catch (err) {
      console.error("Comment submission error:", err);
    }
  };

  // 📩 Submit contact form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      alert(data.status);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative bg-gray-950 text-white py-20 px-4 overflow-hidden">
      {/* 🔮 Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-600 opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-3xl mx-auto space-y-12">
        {/* 💬 Comment Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">
          <form onSubmit={handleCommentSubmit}>
            <h2 className="text-2xl font-bold mb-4">Leave a Comment</h2>
            <textarea
              placeholder="Write your comment..."
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white mb-4"
              value={comment}
              required
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition"
            >
              <FaPaperPlane /> Submit
            </button>
          </form>

          {/* 🧾 Comments Display */}
          {comments.length > 0 && (
            <div className="mt-6 max-h-60 overflow-y-auto space-y-4">
              {comments.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                    {c.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="text-purple-300 font-semibold">{c.name || 'User'}</p>
                    <p className="text-gray-200 text-sm">{c.message || c.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 📩 Contact Form */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white placeholder-opacity-70 
                         focus:placeholder-opacity-100 transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white placeholder-opacity-70 
                         focus:placeholder-opacity-100 transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 rounded bg-white/20 text-white placeholder-white placeholder-opacity-70 
                         focus:placeholder-opacity-100 transition-all duration-300 
                         focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={4}
            />

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
