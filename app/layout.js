import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Mayur Arvind Waykar - Full Stack Developer | Next.js Expert",
    template: "%s | Mayur Arvind Waykar"
  },
  description:
    "Mayur Arvind Waykar is a professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore my portfolio to see innovative projects and connect with me for collaboration opportunities.",
  keywords: [
    "Mayur Waykar",
    "Mayur Arvind Waykar",
    "Mayur Waykar Portfolio",
    "Mayur Waykar Developer",
    "Mayur Waykar Next.js",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Software Engineer",
    "Maharashtra Developer",
    "Pune Developer"
  ],
  authors: [{ name: "Mayur Arvind Waykar", url: "https://github.com/mayur2410-tech" }],
  creator: "Mayur Arvind Waykar",
  publisher: "Mayur Arvind Waykar",
  metadataBase: new URL('https://mayur-waykar-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayur-waykar-portfolio.vercel.app",
    title: "Mayur Arvind Waykar - Full Stack Developer | Next.js Expert",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Explore innovative projects and connect for collaboration.",
    siteName: "Mayur Arvind Waykar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Mayur Arvind Waykar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Arvind Waykar - Full Stack Developer",
    description:
      "Professional Full Stack Developer specializing in React, Next.js, Node.js. Explore my portfolio and projects.",
    creator: "@Mayur_A_Waykar",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
