import React, {Fragment, Suspense} from 'react'
import GiftCardSection from "./GiftCardSection.jsx";
import FeaturedBrandsSection from "./FeaturedBrandsSection.jsx";
import BenefitsSection from "./BenefitsSection.jsx";
import FeaturesSection from "./FeaturesSection.jsx";
function HomePage() {
    return (
        <div>
            <GiftCardSection/>
            <FeaturedBrandsSection/>
            <BenefitsSection/>
            <FeaturesSection />
            <div>
                <img className={"w-full"} src="../src/assets/image 4.svg" alt=""/>
            </div>
        </div>
    )
}

export default HomePage
