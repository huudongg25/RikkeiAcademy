import Footer from "../components/Footer";
import Header from "../components/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <br/>
      {children}
      <br/>
      <Footer />
    </>
  );
}

export default DefaultLayout;
