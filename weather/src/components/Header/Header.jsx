import React from "react";
import styles from "./styles.module.scss"
import logo from "../../img/image.png"

const sections = [
    { id: "weather", label: "Погода" },
    { id: "likes", label: "Лайки" },
    { id: "sendEmail", label: "Контакты" },
    { id: "map", label: "Карта" },
    { id: "about", label: "О нас" },
];

export default function Header() {

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <img src={logo} alt="logo" />
            </div>
            <div className={styles.buttonContainer}>
                {sections.map(s => (
                    <button key={s.id} onClick={() => scrollTo(s.id)}>{s.label}</button>
                ))}
            </div>
        </header>
    );
}