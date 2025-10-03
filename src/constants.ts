import IMAGE1 from './assets/images/similar-products/IMAGE1.png';
import IMAGE2 from './assets/images/similar-products/IMAGE2.png';
import IMAGE3 from './assets/images/similar-products/IMAGE3.png';
import IMAGE4 from './assets/images/similar-products/IMAGE4.png';

import handshake from './assets/images/about-us/handshake.png';
import idea from './assets/images/about-us/idea.png';
import layer from './assets/images/about-us/layer.png';

import user1 from './assets/images/feedback/user1.png';
import user2 from './assets/images/feedback/user2.png';
import user3 from './assets/images/feedback/user3.png';

import image1 from './assets/images/product-details/Rectangle662.png';
import image2 from './assets/images/product-details/Rectangle666.png';
import image3 from './assets/images/product-details/Rectangle667.png';
import image4 from './assets/images/product-details/Rectangle668.png';
import image5 from './assets/images/product-details/Rectangle669.png';

export const products = [
    {
        name: 'Smart Watch With Bracelet - Black',
        price: '25.00 лв',
        image: IMAGE1
    },
    {
        name: 'Ароматна свещ Flower Bouquet',
        price: '25.00 лв',
        image: IMAGE2
    },
    {
        name: 'Илюстрация Лястовица',
        price: '25.00 лв',
        image: IMAGE3
    },
    {
        name: 'Книга с илюстрации Малкия Принц',
        price: '$29.25',
        image: IMAGE4
    },
];

export const information = [
    {
        icon: handshake,
        title: 'Подкрепа на Занаятчии',
        content: 'Ние сме ангажирани с подкрепата на занаятчии, които създават своите произведения с любов и изключително майсторство.'
    },
    {
        icon: idea,
        title: 'Уникалност и Креативност:',
        content: 'Всеки артикул в е ръчно изработен, което гарантира, че няма два напълно еднакви продукта. Това прави ПОДАРЪКА уникален.'
    },
    {
        icon: layer,
        title: 'Високо Качество',
        content: 'Ние се ангажираме с предлагането на продукти, които не само изглеждат страхотно, но и са изработени с грижа.'
    },
];

export const comments = [
    {
        title: 'Страхотни бижута!',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
        image: user1,
        username: 'Sophia Moore',
        userRole: 'CEO at Webflow Agency'
    },
    {
        title: 'Перфектните подаръци!',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident',
        image: user2,
        username: 'Adam Smith',
        userRole: 'Webflow Developer'
    },
    {
        title: 'Супер качество на продуктите',
        content: 'Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident”',
        image: user3,
        username: 'Mike Warren',
        userRole: 'Developer at BRIX Templates'
    }
];

export const images = [image1, image2, image3, image4, image5];

export const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export const colors = [
    { name: 'Beige', value: 'rgba(236,222,204,1)' },
    { name: 'Light Green', value: 'rgba(187,210,120,1)' },
    { name: 'Lavender', value: 'rgba(187,193,248,1)' },
    { name: 'Pink', value: 'rgba(255,211,248,1)' },
    { name: 'Two-tone', value: '' }
];

export const cssColors = {
    primary: "rgba(123,10,209,1)",
    primaryLightBg: "rgba(123,10,209,0.12)",
    primaryHover: "rgba(123,10,209,0.8)",
    blue: "rgba(0,135,251,1)",
    blueLightBg: "rgba(0,135,251,0.26)",
    lightViolet: "rgba(195,178,231,1)",
    textGray: "rgba(95,109,126,1)",
    textGraySecondary: "rgba(111,108,144,1)",
    textGrayDark: "rgba(114,108,108,1)",
    textBlackDim: "rgba(0,0,0,0.4)",
    textBlackLight: "rgba(35,35,35,0.8)",
    borderGray: "rgba(0,0,0,0.2)",
    yellowLightBg: "rgba(255,189,89,0.24)",
    yellow: "rgba(255,189,89,1)",
    lavenderLightBg: "rgba(239,225,240,1)",
    pink: "rgba(255,182,182,1)",
    green: "rgba(152,193,133,1)",
    grayLightBg: "rgba(243,243,243,1)",
};
