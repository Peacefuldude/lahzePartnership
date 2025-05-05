import React, {Fragment, Suspense} from 'react'
import GiftCardSection from "./GiftCardSection.jsx";
import FeaturedBrandsSection from "./FeaturedBrandsSection.jsx";
import BenefitsSection from "./BenefitsSection.jsx";

function HomePage() {
    return (
        <div>
            <GiftCardSection/>
            <FeaturedBrandsSection/>
            <BenefitsSection/>
            <BenefitsSection/>
        </div>
    )
}

export default HomePage
