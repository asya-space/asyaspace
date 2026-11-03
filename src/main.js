import './style.css';
import './js/_components/_burger.js';
import './js/_components/_data.js';
import { initCookiesAgreement } from 'cookies-popup';
initCookiesAgreement({
    privacyUrl: '../../terms-of-service.html',
    color2: 'rgb(196, 139, 232)',
    color3: 'rgb(36, 3, 56)',
    color4: 'rgb(196, 139, 232)',
    hover: 'rgba(231, 200, 250, 0.5)',
    active: 'rgb(170, 54, 243)'
})