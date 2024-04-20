import "@/assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find your dream rental property",
  keywords: "rental, property, find property, find rental",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body className=" h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
