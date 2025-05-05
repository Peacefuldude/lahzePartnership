import React from 'react'
import './HomePage.css'
function FeaturedBrandsSection() {
    return (
        <div className={"flex flex-col justify-center p-[3em] items-stretch text-center"}>
            <div className="featuredBrandsSection-header">
                <div className={" font-bold text-[1.8rem]"}>
                    مورد اعتماد شرکت های بزرگ
                </div>
            </div>
            <div className="featuredBrandsSection-description">
                <div>
                    ما مفتخریم که با این شرکت کار می کنیم
                </div>
            </div>
            <div className="featuredBrandsSection-brands text-center flex items-center justify-center">
                <div className={"m-2 mt-7 shadow-[2px_2px_20px_20px_rgba(0,0,0,0.05)] p-[1em] rounded-4xl inline-flex items-center justify-center flex-wrap gap-2 md:gap-4 bg-[rgba(255,255,255,0.17)]"}>
                    <img src="../src/assets/brands/16045956227427 1.png" alt=""/>
                    <img src="../src/assets/brands/16534668626016 1.png" alt=""/>
                    <img src="../src/assets/brands/CHILI 1.png" alt=""/>
                    <img src="../src/assets/brands/logo.png" alt=""/>
                    <img src="../src/assets/brands/NEMOONE 1.png" alt=""/>
                    <img src="../src/assets/brands/OIP 1.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBrandsSection
