import { useState } from "react";
import emailjs from "emailjs-com";
import css from "./FeedbackFormPhone.module.css";

export default function FeedbackFormPhone() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Email send error:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={css.background}>
      <form className={css.form} onSubmit={handleSubmit}>
        <h2 className={css.title}>Замовте зворотній дзвінок </h2>

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
        <input
          className={css.input}
          type="tel"
          name="phone"
          placeholder="Ваш phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <textarea
          className={css.textarea}
          name="message"
          placeholder="Вкажіть коротко яка категорія товарів вас цікавить та стисло основні вимоги до обладнання"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className={css.button} type="submit" disabled={sending}>
          {sending ? "Sending…" : "Надіслати"}
        </button>

        {success && (
          <p className={css.success}>
            Вітаємо зворотній звязок в обробці. З вами звяжуться протягом 2
            годин
          </p>
        )}
      </form>
    </div>
  );
}

// as string,
