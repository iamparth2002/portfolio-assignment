import { Inter } from "next/font/google";
import "./globals.css";
import { ResumeProvider } from "@/context/ResumeContext";

// Import the Inter font with specific subsets
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parth Gandhi",
  description: "Full Stack Developer Portfolio by Parth Gandhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ResumeProvider>
      <body
        className={inter.className}
        style={{
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        {children}
      </body>
      </ResumeProvider>
    </html>
  );
}
