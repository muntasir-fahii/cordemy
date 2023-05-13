import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="bg-slate-100">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
