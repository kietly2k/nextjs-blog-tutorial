import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Kiet Lee's Blog",
  description: "Created by Kiet Lee"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <Avatar />
        {children}
      </body>
    </html>
  );
}
