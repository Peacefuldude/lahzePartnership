import React from 'react'
import './HomePage.css'

function GiftCardSection() {
    return (
        <div className={"p-[6em] lg:pt-[9em] pt-[11em]"}>
            <div className="giftcards p-[3em] ">
                <div className="flex justify-center">
                    <div className="flex space-x-[-100px] scale-[1] sm:scale-[1.1] md:scale-[1.2] lg:scale-[1.4] origin-center items-end">
                    <img src="../src/assets/cards/Frame 8719.png" className="w-50 h-55 z-10 mt-4"/>
                        <img src="../src/assets/cards/Frame 8720.png" className="w-53 z-20 mt-1"/>
                        <img src="../src/assets/cards/Frame 8721.png" className="w-53 h-65 z-30 -mt-4"/>
                        <img src="../src/assets/cards/8.png" className="w-53 z-20 mt-1"/>
                        <img src="../src/assets/cards/Frame 8724.png" className="w-50 h-55 z-10 mt-4"/>
                    </div>
                </div>
            </div>
            <div
                className="giftCardSection-header flex justify-center justify-center w-full font-bold text-[2.1rem] md:text-[4rem] md:p-6 pb-0">
                <div>
                    ارائه‌ی زیرساخت فروش
                </div>
                <div className={"text-[#E67BE6]"}>
                    گیفت‌کارت
                </div>
            </div>
            <div className="giftCardSection-descriptions text-center text-[1.5rem] md:text-[2rem] md:pt-[0.5em]">
                <div>
                    مخصوص آژانس‌ها و کسب‌وکارهای کوچک
                </div>
            </div>
            <div className="giftCardSection-buttons text-center md:pt-[2.5em]">
                <a href="https://wa.me/989367663655?text=hey%20can%20you%20help%20me%3F" target="_blank" rel="noopener noreferrer">
                    <button
                        className="bg-white h-[48px] w-[174px] m-2 rounded-full hover:cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out">
                        <div>
                            تماس با ما
                        </div>
                    </button>

                </a>
                <button className="
                    bg-[#501A60] text-white h-[48px] w-[372px] m-2 rounded-full
                    hover:cursor-pointer hover:shadow-xl
                    hover:brightness-110 hover:saturate-90
                    transition-all duration-300 ease-in-out
                    ">
                    <div>درخواست همکاری</div>
                </button>
            </div>
        </div>
    )
}

export default GiftCardSection
