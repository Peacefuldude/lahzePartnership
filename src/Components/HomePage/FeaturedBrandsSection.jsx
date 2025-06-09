import React from 'react'
import styles from './Hamkari.module.css'
function FeaturedBrandsSection() {
    return (
        <div className={styles.featuredBrandsSection_container}>
            <div className={styles.featuredBrandsSection_header}>
                <div>
                    مورد اعتماد شرکت های بزرگ
                </div>
            </div>
            <div className="featuredBrandsSection_description">
                <div>
                    ما مفتخریم که با این شرکت کار می کنیم
                </div>
            </div>
            <div className={styles.featuredBrandsSection_brands}>
                <div className={styles.featuredBrandsSection_brands_content}>
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
