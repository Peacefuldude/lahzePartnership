import React, {Fragment, Suspense} from 'react'
import GiftCardSection from "./GiftCardSection.jsx";
import FeaturedBrandsSection from "./FeaturedBrandsSection.jsx";

function HomePage() {
    return (
        <div>
            <GiftCardSection/>
            <FeaturedBrandsSection/>
        </div>
    )
}

export default HomePage
