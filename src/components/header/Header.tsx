import Logo from "../../assets/images/Logo.png";
import search from "../../assets/images/search.png";
import bag from "../../assets/images/bag.png";
import profile from "../../assets/images/profile.png";
import { useState } from "react";

export default function Header() {
    const [selectPage, setSelectedPage] = useState('products');
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm py-2">
            <div className="w-full max-w-[1440px] mx-auto flex flex-row justify-between items-center px-4 md:px-20">
                <div className="flex-shrink-0">
                    <img src={Logo} alt="logo" className="h-6 md:h-12 w-auto" />
                </div>
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex flex-row gap-7 text-sm">
                        <li
                            className={`cursor-pointer ${selectPage === 'products' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('products')}
                        >
                            Продукти
                        </li>
                        <li
                            className={`cursor-pointer ${selectPage === 'blog' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('blog')}
                        >
                            Блог
                        </li>
                        <li
                            className={`cursor-pointer ${selectPage === 'special' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('special')}
                        >
                            Специален допир
                        </li>
                        <li
                            className={`cursor-pointer ${selectPage === 'partners' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('partners')}
                        >
                            Партньори
                        </li>
                        <li
                            className={`cursor-pointer ${selectPage === 'corporate' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('corporate')}
                        >
                            Корпоративни клиенти
                        </li>
                        <li
                            className={`cursor-pointer ${selectPage === 'contacts' ? 'font-semibold' : ''}`}
                            onClick={() => setSelectedPage('contacts')}
                        >
                            Контакти
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4 ml-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Търси..."
                            className="border border-[rgba(217,217,217,1)] rounded-3xl pl-10 pr-2 h-8 w-28 md:w-44"
                        />
                        <img src={search} alt="search" className="absolute top-2 left-2 w-4 h-4" />
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <div className="relative">
                            <img src={bag} alt="bag" className="h-4 md:h-6 w-auto" />
                            <div className="absolute bg-red-400 w-3 h-3 text-[8px] text-center rounded-full top-[-5px] right-[-5px]">1</div>
                        </div>
                        <div>
                            <img src={profile} alt="profile" className="h-5 md:h-6 w-auto" />
                        </div>
                    </div>
                    <button
                        className="md:hidden flex flex-col justify-between h-5 w-6 ml-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="block h-[2px] w-full bg-black"></span>
                        <span className="block h-[2px] w-full bg-black"></span>
                        <span className="block h-[2px] w-full bg-black"></span>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <nav className="md:hidden bg-white w-full border-t border-gray-200 mt-2">
                    <ul className="flex flex-col gap-2 p-4 text-sm">
                        {[
                            { name: 'products', label: 'Продукти' },
                            { name: 'blog', label: 'Блог' },
                            { name: 'special', label: 'Специален допир' },
                            { name: 'partners', label: 'Партньори' },
                            { name: 'corporate', label: 'Корпоративни клиенти' },
                            { name: 'contacts', label: 'Контакти' }
                        ].map((page) => (
                            <li
                                key={page.name}
                                className={selectPage === page.name ? 'font-semibold' : ''}
                                onClick={() => {
                                    setSelectedPage(page.name);
                                    setMenuOpen(false);
                                }}
                            >
                                {page.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
