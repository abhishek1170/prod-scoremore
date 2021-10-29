import "./help.scss";
import { Help as HelpImage, Zoom, WhatsApp, Phone, GoogleMeet, Desktop, Video } from "../../images";
import { Button } from "../../components";
import { getListData } from "../../common/utilities";
import { SectionIds } from "../../common/constants";

const List = ({ items }) => {
  items = getListData(items, 2);
  return items.map((row = []) => {
    return (
      <div className='row'>
        {row.map(({ label, img }) => {
          return (
            <div className='column'>
              <div className="image">
                <img {...img} />
              </div>
              <div>{label}</div>
            </div>
          );
        })}
      </div>
    );
  });
};

const Help = ({ img, headings, btn, list }) => {
  let { primary, secondary } = headings;
  let { src, alt } = img;
  return (
    <div id={SectionIds.help} className='help'>
      <div className="back"/>
      <div className='image-container'>
        <img src={src} alt={alt} />
      </div>
      <div className='offer-container'>
        <div>
          <div className='primary'>{primary}</div>
          <div className='secondary'>{secondary}</div>
          <div className="list"><List items={list} /></div>
          {/* <Button {...btn} /> */}
        </div>
      </div>
    </div>
  );
};

Help.defaultProps = {
  img: {
    src: HelpImage,
    alt: "help"
  },
  headings: {
    primary: "We Offer Live Help Through",
    secondary:
          "Choose any mode of communication, we are here for you"
  },
  btn: {
    label: "Take My Exam",
    callback: () => {}
  },
  list: [
    { img: { src: Zoom, alt: "zoom" }, label: "Zoom Call" },
    { img: { src: WhatsApp, alt: "whatsapp" }, label: "Whatsapp Groups" },
    { img: { src: Phone, alt: "phone" }, label: "Phone Call" },
    { img: { src: GoogleMeet, alt: "google meet" }, label: "Google Meet" },
    { img: { src: Desktop, alt: "remote" }, label: "Remote Desktop" },
    { img: { src: Video, alt: "video" }, label: "Video Call" }
  ]
};

export default Help;
