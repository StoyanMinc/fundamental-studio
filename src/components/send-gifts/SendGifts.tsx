import image1 from '../../assets/images/send-gift/image1.png';
import image2 from '../../assets/images/send-gift/image2.png';
import image3 from '../../assets/images/send-gift/image3.png';
import image4 from '../../assets/images/send-gift/image4.png';
import image5 from '../../assets/images/send-gift/image5.png';
import image6 from '../../assets/images/send-gift/image6.png';
import image7 from '../../assets/images/send-gift/image7.png';
import image8 from '../../assets/images/send-gift/image8.png';
import { cssColors } from '../../constants';

export default function SendGifts() {
    return (
        <div className='w-full bg-[rgba(0,135,251,0.26)] py-20 md:py-0 md:h-200 relative flex items-center justify-center'>
            <div className="flex flex-col w-[550px] justify-center items-center gap-5">
                <h2
                    className="text-4xl font-bold leading-snug"
                >
                    Подаряването става
                    <br />
                    толкова
                    <span
                        style={{ backgroundColor: cssColors.blue }}
                        className="px-10 py-2 rounded-[100px] inline-block rotate-[-2.85deg] ml-2 text-white"
                    >лесно
                    </span>
                </h2>
                <p
                    className="text-[rgba(95,109,126,1)] text-center"
                >
                    Изпращайте перфектния подарък всеки път. Нашият магазин за подаръци е пълен със стотици водещи марки и е внимателно подбран за всякакви поводи.
                </p>
            </div>
            <img src={image1} alt="image" className='hidden md:block absolute top-[60px] left-[200px] w-60 h-60' />
            <img src={image2} alt="image" className='hidden md:block absolute bottom-[60px] left-[20px] w-60 h-60' />
            <img src={image3} alt="image" className='hidden md:block absolute top-[300px] left-[20px] w-40 h-40' />
            <img src={image4} alt="image" className='hidden md:block absolute top-[20px] right-[500px] w-40 h-40' />
            <img src={image5} alt="image" className='hidden md:block absolute bottom-[80px] left-[600px] w-40 h-40' />
            <img src={image6} alt="image" className='hidden md:block absolute top-[250px] right-[200px] w-60 h-60' />
            <img src={image7} alt="image" className='hidden md:block absolute bottom-[130px] right-[500px] w-40 h-40' />
            <img src={image8} alt="image" className='hidden md:block absolute bottom-[40px] right-[40px] w-60 h-60' />
        </div>
    );
}