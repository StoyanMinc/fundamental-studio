import AboutUs from "../about-us/AboutUs";
import Feedback from "../feedback/Feedback";
import ProductDetails from "../product-details/ProductDetails";
import PromoSection from "../promo-section/PromoSection";
import SendGifts from "../send-gifts/SendGifts";
import SimilarProducts from "../similar-products/SimilarProducts";

export default function Products() {
    return (
        <div className="w-full">
            <div className='max-w-[1440px] px-2 sm:px-6 md:px-20 mx-auto'>
                <ProductDetails />
                <SimilarProducts />
                <AboutUs />
            </div>
            <Feedback />
            <SendGifts />
            <PromoSection />
        </div>
    );
}