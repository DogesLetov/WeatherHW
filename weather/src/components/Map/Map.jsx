import styles from "./styles.module.scss"

export default function Map() {
    return(<div className={styles.mapContainer}>
       <iframe className={styles.map}
       src="https://yandex.ru/map-widget/v1/?um=constructor%3A863870cdda97085461d99a6e6b4fd65df52eb79c4ab361999dc6a404ca17de6c&amp;source=constructor" 
       width="400" 
       height="250" 
       frameborder="0">
       </iframe>
        </div>)
}