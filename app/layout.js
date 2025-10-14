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
      <body className="bg-black text-white ">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
