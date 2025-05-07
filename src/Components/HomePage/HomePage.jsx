import React, {Fragment, Suspense} from 'react'
import GiftCardSection from "./GiftCardSection.jsx";
import FeaturedBrandsSection from "./FeaturedBrandsSection.jsx";
import BenefitsSection from "./BenefitsSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
import './HomePage.css'
import CarouselSection from "./CarouselSection.jsx";
function HomePage() {
    return (
        <div>

            <div
                className={"hero-background"}
            >
                <GiftCardSection/>
                <FeaturedBrandsSection/>
            </div>
            <BenefitsSection/>
            <FeaturesSection />

            {/*<FeaturesSection />*/}

            <div>
                <img className={"w-full"} src="../src/assets/image 4.svg" alt=""/>
            </div>
            <CarouselSection/>
        </div>
    )
}

export default HomePage
