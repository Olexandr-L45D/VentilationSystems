import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./FeedbackForm.module.css";

export default function FeedbackForm() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    try {
      await emailjs.send(
        // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData
        // process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={css.background}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>Напишіть листа </h2>

        <input
          className={css.input}
          type="text"
          name="name"
          placeholder="Ваше імʼя"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Ваш Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          className={css.textarea}
          name="message"
          placeholder="Ваше повідомлення"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className={css.button} type="submit" disabled={sending}>
          {sending ? "Sending…" : "Надіслати"}
        </button>

        {success && <p className={css.success}>Ваш лист надіслано ❤️</p>}
      </form>
    </div>
  );
}
