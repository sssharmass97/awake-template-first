<template>
  <footer class="footer">
    <div class="footer__container">
        <div class="footer__row">
            <div class="footer__column footer__column--left">
                <div class="footer__logo">
                    <a href="/" class="footer__logo__link">
                        <img src="~assets/logo.svg" alt="doefeed logo" style="width: 170px; margin-bottom: 15px;" class="footer__logo__image">
                        
                    </a>
                </div>
                <div class="footer__copyright">Copyright © 2019 Ziphyper, Inc. All rights reserved.</div>
                <div class="footer__social-media-icons--container">
                    <ul class="social-share">
                        <li class="btn-facebook social-share__button">
                            <a target="_blank" href="https://google.com"><i class="fa fa-facebook" style="font-size:30px;color:rgba(0, 0, 0, 0.95)"></a></i>
                        </li>
                        <li class="btn-twitter social-share__button">
                            <a target="_blank" href="https://google.com"><i class="fa fa-twitter" style="font-size:30px;color:rgba(0, 0, 0, 0.95)"></a></i>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__column footer__column--right ">
                <ul class="footer__menu">
                    <li class="footer__menu__item"><a href="/whoweare" class="footer__menu__item__link">About Us</a></li>
                    <li class="footer__menu__item"><a href="/cookiepolicy" class="footer__menu__item__link">Cookie Policy</a></li>
                    <li class="footer__menu__item"><a href="/termsofuse" class="footer__menu__item__link">Terms of Use</a></li>
                    <li class="footer__menu__item"><a href="/privacypolicy" class="footer__menu__item__link">Privacy Policy</a></li>
                    <li class="footer__menu__item" data-role="partner-with-us"><a href="/disclosure" class="footer__menu__item__link">FTC Disclosure Statement</a></li>
                    <li class="footer__menu__item" data-role="contact-us"><a href="/contact" class="footer__menu__item__link">Contact Us</a></li>
                </ul>
                <div class="footer__vision">
                    <div class="footer__vision__text">
                        <p style="color:rgba(0, 0, 0, 0.70); margin: 0 0 10px; display: flex; width: 100%; font-size: 14px; line-height: 17px; font-weight: 400;">The content on this website is intended for informational and educational purposes only. Consult a doctor for medical advice, treatment or diagnosis. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used
                            , except as expressly permitted in writing by Ziphyper, Inc.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 282px;
    margin-top: 0;
    background-color: #F2F2F2;
    box-sizing: border-box;
    color: white;
    width: 100%;
    padding-bottom: 15px;
}
    @media screen and (max-width: 999px) {
.footer {
    height: 800px;
    padding-bottom: 10px;
    }
}
    .footer__container {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    flex-grow: 1;
    width: 100%;
    margin: 0 15px;
    max-width: 1200px;
}
    @media screen and (max-width: 999px) {
.footer__container {
    margin: 0 15px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    }
}  
    .footer__row {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: flex-start;
    width: 970px;
    margin-top: 8px;
}
    @media screen and (max-width: 999px) {
.footer__row {
    flex-direction: column;
    width: 100%;
    margin-top: 9px;
    }
}
    @media screen and (min-width: 1000px) {
.footer__column--left {
    width: 235px;
    }
}
    .footer__column--left {
    width: 100%;
    margin-top: -14px;
}
    .footer__column {
    display: flex;
    flex-direction: column;
}
    @media screen and (min-width: 1000px) {
.footer__logo {
    width: 160px;
    margin-bottom: 27px;
    }
}
    
    .footer__logo {
    flex-direction: row;
    display: flex;
    box-sizing: border-box;
    order: 1;
}
    .footer__logo__link {
    outline: none;
    border: 0;
    display: flex;
    cursor: pointer;
}
    .footer__copyright {
    display: flex;
    order: 2;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.70);
    margin-bottom: 17px;
}
    @media screen and (max-width: 999px) {
.footer__copyright {
    margin-bottom: 20px;
    width: 100%;
    }
}
    @media screen and (min-width: 1000px) {
.footer__column--right {
    margin-left: 65px;
    max-width: 670px; 
    }
}
    .footer__column--right {
    width: 100%;
}
    @media screen and (min-width: 1000px) {
.footer__menu {
    width: calc(100% - 160px);
    order: 2;
    }
}
    .footer__menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    margin-bottom: 27px;
}
    @media screen and (max-width: 999px) {
.footer__menu {
    order: 4;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    flex-grow: 1;
    }
}
@media screen and (min-width: 1000px) {
.footer__menu__item:first-child {
    margin-left: 0;
    }
}
    .footer__menu__item {
    display: flex;
}
    @media screen and (max-width: 999px) {
.footer__menu__item {
    margin-top: 40px;
    }
}
    .footer__menu__item__link {
    text-decoration: none;
    white-space: nowrap;
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.95);
    transition: color 150ms linear;
}
    @media screen and (max-width: 999px) {
.footer__menu__item__link {
    line-height: 20px; 
    }
}
    @media screen and (min-width: 1000px) {
.footer__menu__item {
    margin-left: 28px;
    }
}
    @media screen and (min-width: 1000px) {
.footer__vision {
    order: 4;
    }
}
    @media screen and (max-width: 999px) {
.footer__vision {
    order: 3;
    padding: 30px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%; 
    }
}
    .footer__vision {
    display: flex;
    width: 100%;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    color: #fff;
}
    .footer__social-media-icons--container {
    order: 3;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
}
    @media screen and (max-width: 999px) {
.footer__social-media-icons--container {
    margin-bottom: 35px;
    margin-top: 5px;
    }
}
    .footer__social-media-icons--container .social-share {
    display: flex;
    padding: 0;
    margin: 0;
}
    .footer__social-media-icons--container .social-share .btn-facebook.social-share__button, .footer__social-media-icons--container .social-share .btn-twitter.social-share__button {
    margin-right: 10px;
}
    .footer__social-media-icons--container .social-share .btn-facebook, .footer__social-media-icons--container .social-share .btn-twitter {
    list-style: none;
}
    .footer__social-media-icons--container .social-share__button, .footer__social-media-icons--container .social-share__button[data-role-id='open'] {
    background-color: initial;
}
    .footer__social-media-icons--container .social-share__icon {
    fill: white;
    width: 20px;
    height: 20px;
    padding: 10px;
    background-color: rgba(255,255,255,0.2);
    cursor: pointer;
}
</style>
