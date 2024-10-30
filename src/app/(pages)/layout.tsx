import type { Metadata } from "next";
import "../globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Poppins } from "next/font/google";
import { Box, ThemeProvider } from "@mui/material";
import darkTheme from "@/theme";
import Sidebar from "@/components/sidebar/sidebar";
import { pageBoxStyle } from "./layout-style";

const poppins = Poppins({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MOVIE",
  description: "Coding practice movie app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={darkTheme}>
          <body className={poppins.variable}>
            <Box sx={pageBoxStyle}>
              <Sidebar />
              {children}
            </Box>
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
