import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Crezvatic - Digital Marketing Agency",
  description: "Crezvatic is a leading digital marketing agency specializing in SEO, SMM, PPC, web development, and video marketing services.",
  keywords: "digital marketing, SEO, SMM, PPC, web development, video marketing",
  authors: [{ name: "Crezvatic" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
