import { useRef, useState } from 'react';
import arrow from '../../assets/images/feedback/arrow.png';
import backarrow from '../../assets/images/backarrow.png';
import nextarrow from '../../assets/images/nextarrow.png';
import { comments } from '../../constants';

export default function Feedback() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    const scrollLeft = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: 'smooth' });
    };

    return (
        <div className="w-full bg-[rgba(195,178,231,1)] mt-5 md:mt-20">
            <div className="flex flex-col w-full max-w-[1440px] py-5 md:py-20 mx-auto">
                <div className="flex justify-between relative px-5 md:px-20">
                    <div className="flex relative">
                        <h3 className="font-semibold text-2xl">
                            Не взимай само нашето <br /> мнение под внимание
                        </h3>
                        <img
                            src={arrow}
                            alt="icon"
                            className="w-[120px] absolute right-[-120px] top-[-10px]"
                        />
                    </div>

                    <div className="flex gap-4">
                        <div
                            onClick={scrollLeft}
                            className={`w-8 h-8 flex justify-center items-center rounded-full ${canScrollLeft
                                    ? 'bg-[rgba(123,10,209,1)] cursor-pointer'
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <img src={backarrow} alt="arrow" />
                        </div>
                        <div
                            onClick={scrollRight}
                            className={`w-8 h-8 flex justify-center items-center rounded-full ${canScrollRight
                                    ? 'bg-[rgba(123,10,209,1)] cursor-pointer'
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            <img src={nextarrow} alt="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full float-right bg-[rgba(195,178,231,1)]">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="w-full max-w-[1440px] flex overflow-x-scroll gap-8 mt-8 md:mt-16 scrollbar-hide pb-8 md:pb-20 float-right px-4 md:px-20 2xl:max-w-[1620px] 2xl:pl-0"
                >
                    {comments.map((comment) => (
                        <div
                            key={comment.title}
                            className="w-full md:w-[600px] flex flex-col flex-shrink-0 gap-2 p-6 md:gap-7 md:p-10 bg-white border-1 border-[rgba(123,10,209,1)] rounded-2xl"
                        >
                            <h5 className="font-semibold">{comment.title}</h5>
                            <p className="text-[rgba(95,109,126,1)] font-light leading-relaxed">
                                {comment.content}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="bg-[rgba(195,178,231,1)] rounded-full">
                                    <img
                                        src={comment.image}
                                        alt="avatar"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">{comment.username}</p>
                                    <p className="text-sm text-[rgba(111,108,144,1)]">{comment.userRole}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
