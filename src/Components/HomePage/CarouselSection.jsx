import React from 'react'
import CommentsCarouselComponent from "../Shared/Carousel/CommentsCarouselComponent.jsx";
import styles from './Hamkari.module.css'
function CarouselSection() {
    return (
        <div className={styles.commentsCarouselSection_container}>
            <div className={styles.commentsCarouselSection_header}>
                برای همکاری با لحظه کارت آماده‌ایم!
            </div>
            <div className={styles.commentsCarouselSection_description}>
                زیرساخت فروش گیفت کارت را همین امروز با لحظه کارت راه‌اندازی کنید
            </div>
            <CommentsCarouselComponent/>

        </div>
    )
}

export default CarouselSection
