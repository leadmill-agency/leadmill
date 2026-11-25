import type { Metadata } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { UtmCapture } from "@/components/utm-capture";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL, organizationJsonLd } from "@/lib/site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Leadmill — The Growth Department for Contractors",
    template: "%s | Leadmill",
  },
  description:
    "Leadmill is the growth department for contractors and the trades, from landscapers and painters to remodelers and fence companies: Facebook and Instagram ads, a better website, SEO, ChatGPT and AI search, and a CRM and project tracker for one flat fee. Built in a working sign shop. Free 21-day trial, then $1,000 a month plus ad spend. No contract.",
};

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationJsonLd} />
        <UtmCapture />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {pixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
