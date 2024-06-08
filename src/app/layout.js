/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import "./globals.css";
import { cx } from "../utils";
import { Inter, Manrope } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
import { GoogleAnalytics } from "@next/third-parties/google";
import CommentPlugin from "../utils/commentPlugin";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
  verification: {
    google: siteMetadata["google-site-verification"],
    other: {
      "msvalidate.01": siteMetadata["msvalidate.01"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-HJHPW906ZE" />
    </html>
  );
}
