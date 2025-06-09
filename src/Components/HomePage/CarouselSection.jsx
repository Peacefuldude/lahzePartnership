import React from 'react'
import CarouselComponent from "../Shared/Carousel/CarouselComponent.jsx";

function CarouselSection() {
    return (
        <div className={"commentsCarouselSection_container"}>
            <div className={"commentsCarouselSection_header"}>
                برای همکاری با لحظه کارت آماده‌ایم!
            </div>
            <div className={"commentsCarouselSection_description"}>
                زیرساخت فروش گیفت کارت را همین امروز با لحظه کارت راه‌اندازی کنید
            </div>
            <CarouselComponent/>

        </div>
    )
}

export default CarouselSection
