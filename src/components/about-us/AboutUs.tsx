import tail1 from '../../assets/images/about-us/tail1.png';
import { information } from '../../constants';

export default function AboutUs() {
    return (
        <div className="flex flex-col gap-3 md:gap-12 w-full mt-15 px-4 md:px-0">
            <div className="flex justify-center relative">
                <div className="flex flex-col items-center gap-1 relative">
                    <h3 className="text-3xl font-bold text-center md:text-left">С какво се различава</h3>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                        <span
                            className="bg-[rgba(0,135,251,1)] text-white py-2 px-6 md:px-8 rounded-3xl inline-block rotate-[-2.85deg] text-xl md:text-2xl font-semibold"
                        >
                            Great.bg
                        </span>
                        <span className="text-2xl md:text-3xl font-semibold">?</span>
                    </div>

                    <img
                        src={tail1}
                        alt="tail"
                        className="absolute right-[-50px] md:right-[-90px] top-1/2 -translate-y-1/2 w-16 md:w-[80px] h-auto"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {information.map((info, index) => (
                    <div key={index} className="flex flex-col gap-4 md:gap-5 px-0 md:px-4 py-4 md:py-0">
                        <img src={info.icon} alt="icon" className="w-10 h-10" />
                        <h4 className="text-xl md:text-2xl font-bold md:mb-4">{info.title}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{info.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
