import localFont from "next/font/local";


export const UberMove = localFont({
    src: [
        {
            path: "../public/fonts/UberMove-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Bold.woff",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Medium.woff",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Regular.woff",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/UberMove-Light.woff",
            weight: "300",
            style: "normal",
        },
    ],
    variable: "--font-uber-move",
    display: "swap",
    preload: true,
    fallback: ["system-ui", "sans-serif"],
});

export const SFPro = localFont(
    {
        src: [
            {
                path: "../public/fonts/SF-Pro-Display-Heavy.otf",
                weight: '900',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Black.otf",
                weight: '800',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Bold.otf",
                weight: '700',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Semibold.otf",
                weight: '600',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Medium.otf",
                weight: '500',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Light.otf",
                weight: '400',
                style: 'normal',
            },
            {
                path: "../public/fonts/SF-Pro-Display-Thin.otf",
                weight: '300',
                style: 'normal',
            },
        ],
        variable: "--font-sf-pro-display",
        display: "swap",
        preload: true,
        fallback: ["system-ui", "sans-serif"],
    })