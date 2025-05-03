import React from 'react';

function MobileMenu() {
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <div className=" hidden header-mobile-menu">
            {/* Hamburger Icon */}
            <div
                className={`${showMenu ? 'hidden' : ''} header-hamburger-menu-icon cursor-pointer`}
                onClick={() => setShowMenu(true)}
            >
                <svg width="20" height="16" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 9.5C25 9.89782 24.842 10.2794 24.5607 10.5607C24.2794 10.842 23.8978 11 23.5 11H1.5C1.10218 11 0.720644 10.842 0.43934 10.5607C0.158035 10.2794 0 9.89782 0 9.5C0 9.10218 0.158035 8.72064 0.43934 8.43934C0.720644 8.15804 1.10218 8 1.5 8H23.5C23.8978 8 24.2794 8.15804 24.5607 8.43934C24.842 8.72064 25 9.10218 25 9.5ZM1.5 3H23.5C23.8978 3 24.2794 2.84196 24.5607 2.56066C24.842 2.27936 25 1.89782 25 1.5C25 1.10218 24.842 0.720644 24.5607 0.43934C24.2794 0.158035 23.8978 0 23.5 0H1.5C1.10218 0 0.720644 0.158035 0.43934 0.43934C0.158035 0.720644 0 1.10218 0 1.5C0 1.89782 0.158035 2.27936 0.43934 2.56066C0.720644 2.84196 1.10218 3 1.5 3ZM23.5 16H1.5C1.10218 16 0.720644 16.158 0.43934 16.4393C0.158035 16.7206 0 17.1022 0 17.5C0 17.8978 0.158035 18.2794 0.43934 18.5607C0.720644 18.842 1.10218 19 1.5 19H23.5C23.8978 19 24.2794 18.842 24.5607 18.5607C24.842 18.2794 25 17.8978 25 17.5C25 17.1022 24.842 16.7206 24.5607 16.4393C24.2794 16.158 23.8978 16 23.5 16Z" fill="black"/>
                </svg>
            </div>

            {showMenu && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/30 z-40"
                    onClick={() => setShowMenu(false)}
                />
            )}

            <div
                className={`rounded-r-2xl shadow-xl fixed top-0 left-0 h-full w-[70%] bg-[#c3aac7] shadow-xl transform transition-all duration-300 ease-in-out z-50 ${
                    showMenu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >

                <div className="p-4">
                    <div className="mb-4 mt-5 text-white font-medium text-[1rem] hover:cursor-pointer hover:text-opacity-80 transition-colors duration-200">
                        همکاری با ما
                    </div>
                    <div className="mb-4 text-white font-medium text-[1rem] hover:cursor-pointer hover:text-opacity-80 transition-colors duration-200">
                        سوالات متداول
                    </div>
                    <div className="mb-4 text-white font-medium text-[1rem] hover:cursor-pointer hover:text-opacity-80 transition-colors duration-200">
                        درباره ما
                    </div>
                    <div className="mb-4 text-white font-medium text-[1rem] hover:cursor-pointer hover:text-opacity-80 transition-colors duration-200">
                        ورود | ثبت نام
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;