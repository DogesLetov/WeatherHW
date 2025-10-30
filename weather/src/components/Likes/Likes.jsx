import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"

export default function Likes() {
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem("likes");
        return storedLikes ? parseInt(storedLikes, 10) : 0;
    });

    useEffect(() => {
        const storedLikes = localStorage.setItem("likes", likes);
    });
    return (<div className={styles.likes}>
        <div className={styles.likesContent}>
        <p>У вас {likes} {(likes === 1) ? "лайк💛" : "лайков💕"} </p>
        <button onClick={() => setLikes(likes+1)}>Лайкнуть</button>
        </div>
    </div>)
}