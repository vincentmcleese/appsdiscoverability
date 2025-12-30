import localFont from 'next/font/local';

export const neueMontreal = localFont({
    src: [
        {
            path: '../public/fonts/ppneuemontreal-thin.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/ppneuemontreal-book.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/ppneuemontreal-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/ppneuemontreal-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/ppneuemontreal-italic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/ppneuemontreal-semibolditalic.otf',
            weight: '600',
            style: 'italic',
        },
    ],
    variable: '--font-neue-montreal',
    display: 'swap',
});
