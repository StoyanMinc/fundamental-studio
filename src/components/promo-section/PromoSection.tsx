import object1 from '../../assets/images/promo/object1.png';
import object2 from '../../assets/images/promo/object2.png';
import object3 from '../../assets/images/promo/object3.png';
import object4 from '../../assets/images/promo/object4.png';

export default function PromoSection() {
    return (
        <div className='w-full py-5 px-2 md:p-0 md:h-150 relative flex items-center justify-center'>
            <div className="flex flex-col justify-center items-center gap-5">
                <h2
                    className="text-2xl text-center font-semibold md:text-4xl md:font-bold leading-snug"
                >
                    Открийте своя
                    <span
                        className="bg-[rgba(0,135,251,1)] text-white px-5 py-1 md:px-10 md:py-2 rounded-[100px] inline-block rotate-[-2.85deg] mx-2"
                    >
                        уникален
                    </span>
                    подарък<br />днес и станете част от нашата мисия
                </h2>
                <div className='md:w-[600px]'>
                    <p className="text-[rgba(95,109,126,1)] text-center">We’ve been told it is possible to revolutionize the payment industry. We have not reinvented the wheel, we decided to build upon it - successfully.</p>
                </div>
                <button
                    className='bg-[rgba(123,10,209,1)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(123,10,209,0.8)] cursor-pointer'
                >
                   Разгледай продуктите
                </button>
            </div>
            <img src={object1} alt="image" className='hidden md:block absolute top-[60px] left-[50px] w-50 h-auto' />
            <img src={object2} alt="image" className='hidden md:block absolute bottom-[60px] left-[200px] w-30 h-auto' />
            <img src={object3} alt="image" className='hidden md:block absolute top-[40px] right-[90px] w-30 h-auto' />
            <img src={object4} alt="image" className='hidden md:block absolute bottom-[20px] right-[200px] w-40 h-auto' />
        </div>
    );
}