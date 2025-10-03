import { useRef } from 'react';

import backarrow from '../../assets/images/backarrow.png';
import nextarrow from '../../assets/images/nextarrow.png';
import { products } from '../../constants';

export default function SimilarProducts() {

    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col gap-12 w-full max-w-[1440px] mx-auto mt-10">
            <div className='flex justify-between items-center'>
                <h2 className="text-2xl md:text-4xl font-bold">Подобни продукти</h2>
                <div className='flex gap-2 md:gap-3'>
                    <div
                        className='w-8 h-8 flex justify-center items-center rounded-full 
                        bg-[rgba(123,10,209,1)] cursor-pointer'
                        onClick={scrollLeft}
                    >
                        <img src={backarrow} alt="back" />
                    </div>
                    <div
                        className='w-8 h-8 flex justify-center items-center rounded-full 
                        bg-[rgba(123,10,209,1)] cursor-pointer'
                        onClick={scrollRight}
                    >
                        <img src={nextarrow} alt="next" />
                    </div>
                </div>
            </div>
            <div
                ref={scrollRef}
                className='flex gap-4 md:gap-10 overflow-x-auto scrollbar-none'
            >
                {products.map((product) => (
                    <div
                        key={product.name}
                        className='flex flex-col gap-2 md:gap-4 min-w-[200px] md:min-w-[280px] flex-shrink-0'
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className='h-[220px] md:h-[320px] w-full object-cover rounded-lg'
                        />
                        <p className='font-bold w-full md:w-[60%] tracking-wide text-sm md:text-base'>{product.name}</p>
                        <p className='text-[rgba(35,35,35,0.8)] text-sm md:text-base'>{product.price}</p>
                        <button
                            className='bg-[rgba(123,10,209,1)] hover:bg-[rgba(123,10,209,0.8)] cursor-pointer py-2 px-4 md:py-2 md:px-5 rounded-md text-white font-medium text-sm md:text-base'
                        >
                            Купи сега
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
