import React, { useState } from "react";
import { Logo, ThreeLine, Cross } from "../../images";
import "./header.scss";
import { SectionIds } from "../../common/constants";

const Section = ({ id, name, isSelected, callback }) => {
  let [isHovered, setHover] = useState(false);
  return (
    <div
      className={`${isHovered && "isHover"} ${isSelected && "isSelected"}`}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={() => {
        let ref = document.getElementById(id);
        window.scrollTo({ top: ref.offsetTop, left: 0, behavior: "smooth" });
        if (callback) callback();
      }}
    >
      {name}
    </div>
  );
};
const LogoContainer = ({ logo }) => {
  return (
    <div className='logo'>
      <img src={logo} alt='scoremore' />
    </div>
  );
};

const Header = ({ logo, sections }) => {
  let [selectedId] = useState("main");
  let [openMobileNav, setMobileNav] = useState(false);
  return (
    <>
      <div id={SectionIds.header} className='header'>
        <LogoContainer logo={logo} />
        <div className='sections_label'>
          {sections.map(({ id, name }) => {
            return <Section key={id} id={id} name={name} isSelected={id === selectedId} />;
          })}
        </div>
        <div
          className='sections_img'
          onClick={() => {
            setMobileNav(!openMobileNav);
          }}
        >
          <img src={openMobileNav ? Cross : ThreeLine} alt='drawer' />
        </div>
      </div>
      {openMobileNav && (
        <div className='navigation-drawer'>
          <div className='right-design' />
          <div className='sections'>
            {sections.map(({ id, name }, index) => {
              name = `0${index + 1}  -  ${name}`;
              return (
                <Section
                  key={id}
                  id={id}
                  name={name}
                  isSelected={id === selectedId}
                  callback={() => {
                    setMobileNav(false);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

Header.defaultProps = {
  logo: Logo,
  sections: [
    {
      id: SectionIds.main,
      name: "Home"
    },
    {
      id: SectionIds.help,
      name: "Service"
    },
    {
      id: SectionIds.whyus,
      name: "Why us"
    },
    {
      id: SectionIds.faq,
      name: "FAQs"
    },
    {
      id: SectionIds.testimonials,
      name: "Reviews"
    }
  ]
};

export default Header;
