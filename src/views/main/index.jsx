import React from "react";
import "./main.scss";
import { Button } from "../../components";
import { GirlImage, HeadingMark } from "../../images";
import { SectionIds } from "../../common/constants";

const Heading = ({ headings, btn }) => {
  let { primary, secondary, tertiary, img } = headings;
  return (
    <div className='headings'>
      <div className='tertiary'>{tertiary}</div>
      <div className='primary'>{primary}</div>
      <div className="primary_img"><ImageContainer {...img} /></div>
      <div className='secondary'>{secondary}</div>
      <Button {...btn}/>
    </div>
  );
};

const ImageContainer = ({ className, src, alt }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} />
    </div>
  );
};
const Main = ({ headings, btn, img }) => {
  return (
    <div id={SectionIds.main}   className='main'>
      <div className='right-design'></div>
      <Heading headings={headings} btn={btn} />
      <ImageContainer className='imageContainer' {...img} />
    </div>
  );
};

Main.defaultProps = {
  headings: {
    img: {
      src: HeadingMark,
      alt: "mark"
    },
    primary: "Homework/Exam/Quiz Due Soon?",
    
    secondary:
      "Our expert with vast knowledge are available 24*7 for your services. We assure you A+ grade and timely delivery. Get help now by filling up the form",
    tertiary: "Need help .. Scoremore got you covered."
  },
  btn: {
    label: "Get Started!",
    callBack: () => {
      let id = window.innerWidth < 768 ? "form-center" : "form-submit" 
      let ref = document.getElementById(id);
      window.scrollTo({ top: ref.offsetTop, left: 0, behavior: "smooth" });
    }
  },
  img: {
    src: GirlImage,
    alt: "girl-image"
  }
};

export default Main;
