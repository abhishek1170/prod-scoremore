import "./footer.scss";
import { SimpleLogo, Facebook, Instagram, Twitter, LinkedIn, Logo } from "../../images";
import { SectionIds } from "../../common/constants";

const LogoContainer = ({ logo }) => {
  return (
    <div className='logo'>
      <img src={logo.Logo} alt='logo' />
      <div className='heading'>{logo.heading}</div>
    </div>
  );
};

const Navigation = ({ navigation }) => {
  return (
    <div className='navigation'>
      <div className='heading'>{navigation.heading}</div>
      <div className='subheading'>{navigation.about}</div>
      <div className='subheading'>{navigation.work}</div>
      <div className='subheading'>{navigation.faq}</div>
    </div>
  );
};

const Detail = ({ details }) => {
  return (
    <div className='details'>
      <div className='heading'>{details.heading}</div>
      <div className='subheading'>{details.phone}</div>
      <div className='subheading'>{details.mail}</div>
    </div>
  );
};

const Contact = ({ contact }) => {
  return (
    <div className='contact'>
      <div className='image-container'>
        <img src={contact.Facebook} alt='facebook' />
      </div>
      <div className='image-container'>
        <img src={contact.Instagram} alt='instagram' />
      </div>
      <div className='image-container'>
        <img src={contact.Twitter} alt='instagram' />
      </div>
      <div className='image-container'>
        <img src={contact.LinkedIn} alt='linkedin' />
      </div>
    </div>
  );
};
const Footer = ({ copyright, logo, navigation, details, contact }) => {
  return (
    <div id={SectionIds.footer} className='footer'>
      <div className='footer_upper_web'>
        <div>
          <LogoContainer logo={logo} />
          <Navigation navigation={navigation} />
        </div>
        <div>
          <Detail details={details} />
          <Contact contact={contact} />
        </div>
      </div>
      <div className='footer_upper_mobile'>
        <LogoContainer logo={logo} />
        <div className="contact-wrapper">
          <Navigation navigation={navigation} />
          <Detail details={details} />
        </div>
        <Contact contact={contact} />
      </div>
      <div className='line' />
      <div className='footer_lower'>
        <img src={Logo} alt='logo' />
        <div className='copyright'>{copyright}</div>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  copyright: "© 2021 scoremore  |   All rights reserved. Privacy Policy",
  logo: {
    Logo: SimpleLogo,
    heading: "Be the first to know. Register for Lorem Ipsum is simply dummy text"
  },
  navigation: {
    heading: "Site Navigation",
    about: "About",
    work: "How it Works",
    faq: "FAQs"
  },
  details: {
    heading: "Contact",
    phone: "+91- 9953193725",
    mail: "support@scoremore.com"
  },
  contact: {
    Facebook,
    Instagram,
    Twitter,
    LinkedIn
  }
};

export default Footer;
