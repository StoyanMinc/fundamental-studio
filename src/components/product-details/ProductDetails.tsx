import { useState } from 'react';

import check from '../../assets/images/product-details/check.png';
import comment from '../../assets/images/product-details/comment.png';
import star from '../../assets/images/product-details/star.png';
import minus from '../../assets/images/product-details//minus.png';
import plus from '../../assets/images/product-details/plus.png';
import truck from '../../assets/images/product-details/truck.png';
import bag2 from "../../assets/images/product-details/bag2.png";
import { images, sizes, colors } from '../../constants';

export default function ProductDetails() {

    const price = 30;
    const quantity = 2;

    const [primaryImage, setPrimaryImage] = useState(images[0]);
    const [size, setSize] = useState<string>('S');
    const [color, setColor] = useState<string>('Beige')
    const [totalPrice, setTotalPrice] = useState<number>(price);
    const [totalQty, setTotalQty] = useState<number>(quantity);

    const secondaryImages = images.filter((img) => img !== primaryImage);

    const decrementQty = () => {
        if (totalQty <= 2) return;
        setTotalQty((prev) => prev - 2);
        setTotalPrice((prev) => prev - 30);
    }
    const incrementQty = () => {
        setTotalQty((prev) => prev + 2)
        setTotalPrice((prev) => prev + 30);
    }
    const buyProduct = () => { console.log('Thanks for your purchase :)'); }
    return (
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center mt-10 flex-1 px-2 md:px-0">
            <div className="flex flex-col gap-4 w-full md:w-[642px]">
                <div className="w-full h-auto">
                    <img
                        src={primaryImage}
                        alt="Primary product"
                        className="w-full h-full object-cover rounded-lg md:rounded-none"
                    />
                </div>
                <div className="flex gap-2 w-full overflow-x-auto md:overflow-x-visible">
                    {secondaryImages.map((image, i) => (
                        <div
                            key={i}
                            className="flex-1 min-w-[80px] md:min-w-0 aspect-square border cursor-pointer border-gray-300"
                            onClick={() => setPrimaryImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Product ${i}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-1 flex-col md:w-[620px] gap-4 pt-6 md:pt-10 justify-between">
                <div className='flex flex-col md:flex-row justify-between gap-3'>
                    <h1 className="text-2xl md:text-3xl font-bold">Обеци Гъбки</h1>
                    <div className='flex gap-2 md:gap-3'>
                        <div className='flex items-center py-1 px-3 bg-[rgba(255,189,89,0.24)] gap-2 rounded-lg'>
                            <img src={star} alt="comment" className='w-4 h-4 md:w-4 md:h-4' />
                            <span className='text-sm text-[rgba(255,189,89,1)] font-semibold'>4.8</span>
                        </div>
                        <div className='flex items-center py-1 px-3 bg-[rgba(239,225,240,1)] gap-2 rounded-lg'>
                            <img src={comment} alt="star" className='w-4 h-4 md:w-4 md:h-4' />
                            <span className='text-sm text-[rgba(123,10,209,1)] font-semibold'>67 Отзива</span>
                        </div>
                    </div>
                </div>
                <p className='mb-2 text-[rgba(0,0,0,0.5)] text-sm md:text-base'>Кат. номер <span className='text-black'>8418</span></p>
                <p className='text-[rgba(0,0,0,0.5)] text-sm md:text-base'>Производител: <span className='text-black font-bold'>Epoque Candle</span></p>
                <p className='text-sm md:text-base'>Висящи ефектни обеци гъбки, боядисани с черна матова боя...</p>
                <p className='text-sm md:text-base'><span className='font-bold'>Материал: </span>месинг, матова черна боя, стоманени щифтове</p>
                <p className='text-sm md:text-base'><span className='font-bold'>Размер: </span>дължина - 7.5 см</p>
                <div className='border-t border-b border-gray-200 py-8'>
                    <p className='font-semibold text-lg md:text-2xl'>Изберете цвят</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {colors.map((c) =>
                            c.name === 'Two-tone' ? (
                                <div
                                    key={c.name}
                                    className={`relative p-[2px] rounded-full cursor-pointer
                            ${color === c.name ? 'ring-2 ring-[rgba(123,10,209,1)]' : ''}`}
                                    title={c.name}
                                    onClick={() => setColor(c.name)}
                                >
                                    <div className="w-[36px] h-[36px] md:w-[41px] md:h-[41px] rounded-full overflow-hidden flex flex-col">
                                        <div className="flex-1 bg-[rgba(255,182,182,1)]"></div>
                                        <div className="flex-1 bg-[rgba(152,193,133,1)]"></div>
                                    </div>
                                    {color === c.name && (
                                        <img src={check} alt="Selected" className="absolute w-3 h-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    )}
                                </div>
                            ) : (
                                <div
                                    key={c.name}
                                    className={`relative p-[2px] rounded-full cursor-pointer
                            ${color === c.name ? 'ring-2 ring-[rgba(123,10,209,1)]' : ''}`}
                                    title={c.name}
                                    onClick={() => setColor(c.name)}
                                >
                                    <div
                                        className="w-[36px] h-[36px] md:w-[41px] md:h-[41px] rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: c.value }}
                                    >
                                        {color === c.name && (
                                            <img src={check} alt="Selected" className="w-3 h-3" />
                                        )}
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className='flex flex-col gap-3 md:gap-6 md:mt-5'>
                    <p className='font-semibold text-lg md:text-2xl'>Изберете размер</p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-2">
                        {sizes.map((sz) => (
                            <label
                                key={sz}
                                className={`flex gap-1 items-center py-1 px-2 rounded-md cursor-pointer
                ${size === sz
                                        ? 'bg-[rgba(123,10,209,0.12)] text-[rgba(123,10,209,1)]'
                                        : 'bg-[rgba(243,243,243,1)] text-black'}`
                                }
                            >
                                <input
                                    type="radio"
                                    name="size"
                                    value={sz}
                                    className="accent-[rgba(123,10,209,1)]"
                                    checked={size === sz}
                                    onChange={() => setSize(sz)}
                                />
                                {sz.toUpperCase()}
                            </label>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 md:mt-4'>
                    <p className='font-bold text-2xl md:text-3xl'>{totalPrice.toFixed(2)}лв</p>
                    <div className='flex gap-2 md:gap-5 items-center'>
                        <img src={minus} alt="minus" onClick={decrementQty} className='cursor-pointer w-6 h-6 md:w-7 md:h-7' />
                        <span className='text-xl md:text-2xl'>{totalQty}</span>
                        <img src={plus} alt="plus" onClick={incrementQty} className='cursor-pointer w-6 h-6 md:w-7 md:h-7' />
                    </div>
                </div>
                {/* <button className='bg-[rgba(123,10,209,1)] text-white px-4 py-2 rounded-lg hover:bg-[rgba(123,10,209,0.8)] mt-4 md:mt-7 w-full md:w-auto'>
                    Поръчай сега
                </button> */}
                <div className="flex justify-start w-full">
                    <button
                        className='bg-[rgba(123,10,209,1)] text-white px-6 py-2 rounded-lg hover:bg-[rgba(123,10,209,0.8)] mt-4 cursor-pointer md:mt-7 w-full md:w-auto'
                        onClick={buyProduct}
                    >
                        Поръчай сега
                    </button>
                </div>
                <div className='flex flex-col gap-4 border border-gray-300 p-3 rounded-lg text-sm md:text-base'>
                    <div className='flex gap-3 border-b border-gray-300 pb-4 flex-wrap'>
                        <img src={truck} alt="truck" className='w-6 h-6 md:w-8 md:h-8' />
                        <div>
                            <p className='font-bold'>Безплатна доставка над 50лв</p>
                            <a href="#" className='text-[rgba(123,10,209,1)] underline'>Подробности за доставка</a>
                        </div>
                    </div>
                    <div className='flex gap-3 flex-wrap'>
                        <img src={bag2} alt="bag" className='w-6 h-6 md:w-7 md:h-7' />
                        <div>
                            <p className='font-bold'>Връщане на доставка</p>
                            <span
                                className='text-[rgba(114,108,108,1)]'
                            >
                                Безплатна 30-дневна доставка връщане.
                                <a href="#" className='text-[rgba(123,10,209,1)] underline'>
                                    Подробности
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
