import React from 'react'
import CarouselComponent from "../Shared/Carousel/CarouselComponent.jsx";

function CarouselSection() {
    return (
        <div className={"lg:mt-[-90px] mb-6"}>
            <div className={"font-bold text-[2rem] text-center"}>
                برای همکاری با لحظه کارت آماده‌ایم!
            </div>
            <div className={"text-[1rem]v text-center"}>
                زیرساخت فروش گیفت کارت را همین امروز با لحظه کارت راه‌اندازی کنید
            </div>
            <CarouselComponent/>

        </div>
    )
}

export default CarouselSection
