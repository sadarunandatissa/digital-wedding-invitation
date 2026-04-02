// src/components/RSVP.jsx
import { useState } from "react";

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "0",
    dietary: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // EmailJS integration will go right here
    console.log("Form ready to send via EmailJS:", formData);
  };

  return (
    <section className="py-32 px-6 bg-[#FAF9F6] flex justify-center">
      <div className="max-w-lg w-full">
        <h2 className="font-serif text-5xl text-center mb-10">RSVP</h2>

        <form onSubmit={handleSubmit} className="space-y-8 flex flex-col">
          <div>
            <label className="block text-sm uppercase tracking-widest mb-2">
              First & Last Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest mb-2">
              Will you be joining us?
            </label>
            <select
              name="attending"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800"
            >
              <option value="yes">Joyfully Accepts</option>
              <option value="no">Regretfully Declines</option>
            </select>
          </div>

          <div>
            <label className="block text-sm uppercase tracking-widest mb-2">
              Dietary Restrictions
            </label>
            <textarea
              name="dietary"
              onChange={handleChange}
              className="w-full bg-transparent border-b border-stone-400 py-2 focus:outline-none focus:border-stone-800 resize-none"
              rows="2"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-8 py-4 px-8 bg-stone-800 text-white uppercase tracking-widest text-sm hover:bg-stone-700 transition-colors"
          >
            Send Reply
          </button>
        </form>
      </div>
    </section>
  );
}
