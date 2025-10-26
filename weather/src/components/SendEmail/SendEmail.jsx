import React, { useState } from "react";
import style from './styles.module.scss'

export default function SendEmail() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const res = await fetch("https://formspree.io/f/manpgbvr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                throw new Error("Ощибка отправки письма");
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (<div className={style.contactForm}>
        <form onSubmit={handleSubmit}>
            <h2>Свяжитесь с нами</h2>
            <input type="text" 
            name="name" 
            placeholder="Введите имя" 
            value={formData.name} 
            onChange={handleChange} 
            required />
            <input type="email"
            name="email" 
            placeholder="Введите почту" 
            value={formData.email} 
            onChange={handleChange} 
            required />
            <textarea
            name="message"
            placeholder="Ваше сообщение"
            value={formData.message}
            onChange={handleChange}
            required
            ></textarea>
            <button type="submit" disabled={loading}>
                {loading? "Загрузка..." : "Отправить"}
            </button>
            {error && <p>{error}</p>}
            {success && <p>Отправлено</p>}
        </form>
    </div>);
}