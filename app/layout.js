import Navbar from "./ui/Navbar";
import ClientLayout from "./ui/ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Saransh | Portfolio",
  description: "This is my Next.js app",
  icons: {
    icon: "/assets/MyLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-black text-white '>
        <ClientLayout>
          <main className="">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  );
}
