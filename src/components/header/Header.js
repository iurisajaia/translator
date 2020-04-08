import React  from 'react';

export default function Header() {
    return (
        <>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
            </div>

            <div class="header-left" id="scrollspy">
                <div class="logo bg-base-color">
                    <a href="/" class="text-white mb-0">M</a>
                </div>

                <div class="main-menu" id="js-menu">
                    <div class="cross bg-base-color">
                        <span><i class="fas fa-times text-white"></i></span>
                    </div>
                    <nav class="menu">
                        <ul class="menu-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="/profile/1">Profile</a>
                            </li>


                        </ul>
                    </nav>
                </div>

                <div class="btn-share">
                    <span class="social_share text-dark"></span>
                </div>

            </div>
        </>
    );
}
