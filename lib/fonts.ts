import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";

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

export const NunitoFont = Nunito_Sans(
    {
        weight: ['400', '500', '600', '700'],
        subsets: ["latin"],
        variable: "--font-nunito-sans"
    })