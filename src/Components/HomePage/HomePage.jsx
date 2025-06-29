import React, {Fragment, Suspense} from 'react'
import GiftCardSection from "./GiftCardSection.jsx";
import FeaturedBrandsSection from "./FeaturedBrandsSection.jsx";
import BenefitsSection from "./BenefitsSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import styles from './Hamkari.module.css'
import CarouselSection from "./CarouselSection.jsx";
function HomePage() {
    return (
        <div className={styles.homePage_container}>
            <div
                className={styles.hero_background}
            >
                <GiftCardSection/>
                <FeaturedBrandsSection/>
            </div>
            <BenefitsSection/>
            <div className={styles.homePage_divider_svg}>
                <svg
                    width="75%"
                    height="17"
                    viewBox="0 0 257 17"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                <g filter="url(#filter0_f_780_4374)">
                    <line x1="65" y1="1.5" x2="256" y2="1.5" stroke="#EDC1F5" />
                </g>
                <g filter="url(#filter1_f_780_4374)">
                    <line x1="1" y1="15.5" x2="192" y2="15.5" stroke="#EDC1F5" />
                </g>
                <defs>
                        <filter id="filter0_f_780_4374" x="64.2" y="0.2" width="192.6" height="2.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur_780_4374"/>
                        </filter>
                        <filter id="filter1_f_780_4374" x="0.2" y="14.2" width="192.6" height="2.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="0.4" result="effect1_foregroundBlur_780_4374"/>
                        </filter>
                    </defs>
                </svg>

            </div>
            <FeaturesSection />
            <div>
                <img className={styles.homePage_standalone_image} src="../src/assets/image 4.svg" alt=""/>
            </div>
            <CarouselSection/>
        </div>
    )
}

export default HomePage
