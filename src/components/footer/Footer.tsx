import heart from '../../assets/images/footer/heart.png';
import logo from '../../assets/images/footer/logo.png';
import facebook from '../../assets/images/footer/Facebook.png';
import instagram from '../../assets/images/footer/Instagram.png';
import linkedin from '../../assets/images/footer/LinkedIn.png';
import youtube from '../../assets/images/footer/YouTube.png';
import location from '../../assets/images/footer/location.png';
import phone from '../../assets/images/footer/phone.png';
import mail from '../../assets/images/footer/mail.png';

export default function Footer() {
    return (
        <div
            className="flex flex-col gap-12 w-full max-w-[1440px] px-4 md:px-20 pt-5 md:pt-20 mx-auto md:h-[360px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heart})` }}
        >
            <div className='flex flex-col md:flex-row gap-10 md:justify-between px-2 md:px-0'>
                <div className='flex flex-col gap-5 items-center md:items-start text-center md:text-left'>
                    <img src={logo} alt="logo" className='w-32 md:w-50' />
                    <p className='text-[rgba(95,109,126,1)] tracking-wider text-sm md:text-base'>
                        Generate outside the box thinking <br /> with the possibility to targtet the low.
                    </p>
                    <div className='flex gap-4 md:gap-7 items-center'>
                        <img src={facebook} alt="facebook" className='w-8 h-auto md:w-10' />
                        <img src={instagram} alt="instagram" className='w-6 h-6 md:w-auto md:h-5' />
                        <img src={linkedin} alt="linkedIn" className='w-6 h-6 md:w-auto md:h-5' />
                        <img src={youtube} alt="youtube" className='w-6 h-6 md:w-auto md:h-5' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-6 md:gap-10 justify-center text-center md:text-left'>
                    <div className='flex flex-col gap-2 md:gap-4'>
                        <h5 className='font-semibold'>Продукти</h5>
                        <p className='text-[rgba(95,109,126,1)]'>Картички</p>
                        <p className='text-[rgba(95,109,126,1)]'>Чаши</p>
                        <p className='text-[rgba(95,109,126,1)]'>Картини</p>
                        <p className='text-[rgba(95,109,126,1)]'>Играчки</p>
                        <p className='text-[rgba(95,109,126,1)] md:hidden'>Бижута</p>
                        <p className='text-[rgba(95,109,126,1)] md:hidden'>Текстили</p>
                        <p className='text-[rgba(95,109,126,1)] md:hidden'>Декорации</p>
                        <p className='text-[rgba(95,109,126,1)] md:hidden'>Други</p>
                    </div>
                    <div className='hidden md:flex flex-col gap-4 justify-end'>
                        <p className='text-[rgba(95,109,126,1)]'>Бижута</p>
                        <p className='text-[rgba(95,109,126,1)]'>Текстили</p>
                        <p className='text-[rgba(95,109,126,1)]'>Декорации</p>
                        <p className='text-[rgba(95,109,126,1)]'>Други</p>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4'>
                        <h5 className='font-semibold'>Полезни линкове</h5>
                        <p className='text-[rgba(95,109,126,1)]'>Доставка</p>
                        <p className='text-[rgba(95,109,126,1)]'>Моя профил</p>
                        <p className='text-[rgba(95,109,126,1)]'>Срокове</p>
                        <p className='text-[rgba(95,109,126,1)]'>Общи условия</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-full md:w-[20%] text-center md:text-left items-center md:items-start'>
                    <h5 className='font-semibold'>Контакти</h5>
                    <div className='flex flex-col md:flex-row md:items-center gap-1 md:gap-3'>
                        <img src={location} alt="location" className='w-5 h-5 md:w-auto md:h-6' />
                        <span className='text-[rgba(95,109,126,1)] text-sm md:text-base'>Poligona, bl.43, ent.1-Offices, Office 5Sofia 1750, Bulgaria</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={phone} alt="phone" className='w-5 h-5 md:w-5 md:h-auto' />
                        <span className='text-[rgba(95,109,126,1)] text-sm md:text-base'>+359 886 299 300</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={mail} alt="mail" className='w-5 h-5 md:w-auto md:h-4' />
                        <span className='text-[rgba(95,109,126,1)] text-sm md:text-base'>office@ada-soft.bg</span>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-2 md:gap-0 border-t border-t-[rgba(0,0,0,0.2)] justify-center md:justify-between items-center text-center md:text-left py-4'>
                <p className='text-[rgba(95,109,126,1)] text-sm'>© 2023 Great.co. All Rights Reserved.</p>
                <p className='text-[rgba(95,109,126,1)] text-sm'>Made with love and code by Fundamental Studio</p>
            </div>
        </div>
    );
}
 