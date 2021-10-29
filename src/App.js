import Header from "./views/header";
import Main from "./views/main";
import Form from "./views/form";
import Tutorial from "./views/tutorial";
import Help from "./views/help";
import Courses from "./views/courses";
import Wedo from "./views/wedo";
import Whyus from "./views/whyus";
import Testimonials from "./views/testimoinals";
import FAQ from "./views/faq";
import Footer from "./views/footer";
import { useEffect } from "react";

function App() {
  const updateLayout = () => {
    this.forceUpdate();
  };
  useEffect(() => {
    document.addEventListener("onresize", updateLayout);
    return () => {
      document.removeEventListener("onresize", updateLayout);
    };
  }, []);
  return (
    <div className='App'>
      <Header />
      <Main />
      <Form />
      {/* <Tutorial /> */}
      <Help />
      <Courses />
      <Wedo />
      <Whyus />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
