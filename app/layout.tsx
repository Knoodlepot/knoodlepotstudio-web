import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Knoodlepot Studio",
  description:
    "Apps steeped in myth, lore, and Victorian wonder. Independent mobile and web apps by Knoodlepot Studio.",
  openGraph: {
    title: "Knoodlepot Studio",
    description:
      "Apps steeped in myth, lore, and Victorian wonder.",
    url: "https://knoodlepotstudio.com",
    siteName: "Knoodlepot Studio",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knoodlepot Studio",
    description: "Apps steeped in myth, lore, and Victorian wonder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Inline script to set dark class before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${cinzel.variable} ${playfair.variable} ${inter.variable} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
