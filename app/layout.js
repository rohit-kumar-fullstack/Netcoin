import { Manrope } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Script from "next/script";

// Load Manrope font
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you need
  variable: "--font-manrope",
});

export const metadata = {
  title: "Netcoins | Buy Bitcoin & Crypto",
  description: "Buy and Sell Bitcoin, Ethereum, and over 60 cryptocurrencies securely with Netcoins, a regulated crypto trading platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            {children}
            <Script id="tawkto-chat" strategy="afterInteractive">
              {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68e39690a72e3519521839c9/1j6sg8a5v';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
            </Script>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
