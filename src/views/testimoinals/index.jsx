import { useMemo, useRef, useState } from "react";

import "./testimoinals.scss";
import { ManIcon, DoubleComma } from "../../images";
import { CircleHeading } from "../../components";

import { SectionIds } from "../../common/constants";
import { getListData } from "../../common/utilities";

const Testimonials = ({ headings, testimonials }) => {
  let { primary, secondary } = headings;
  let testimonialsCard = useRef();
  let [rightArrow, leftArrow] = ["<", ">"];
  // let data = useMemo(() => getListData(testimonials, 3), [testimonials]);
  // let [selectedNumber, setSelected] = useState(0);
  // let testimonialRow = data[selectedNumber];
  return (
    <div id={SectionIds.testimonials} className='testimonials'>
      <div className='heading'>
        <div>
          <CircleHeading circle='circle'>
            <div className='primary'>{primary}</div>
          </CircleHeading>
          <div className='secondary'>{secondary}</div>
        </div>
        <div className='buttons'>
          <div
            className='button'
            onClick={() => {
              testimonialsCard.current.scrollBy(-100, 0);
              // if (selectedNumber) setSelected(selectedNumber - 1);
            }}
          >
            {rightArrow}
          </div>
          <div
            className='button'
            onClick={() => {
              testimonialsCard.current.scrollBy(100, 0);
              // if (selectedNumber < data.length - 1) setSelected(selectedNumber + 1);
            }}
          >
            {leftArrow}
          </div>
        </div>
      </div>
      <div className='secondary'>{secondary}</div>
      <div className='cards' ref={testimonialsCard} id='testimonialsCard'>
        {testimonials &&
          testimonials.map(({ name, desc, img }) => {
            return (
              <div className='card'>
                <div className='image-container'>
                  <div>
                    <img {...img} />
                  </div>
                  <div>
                    <img src = {DoubleComma} />
                  </div>
                </div>
                <div className='name'>{name}</div>
                <div className='desc'>{desc}</div>
              </div>
            );
          })}
      </div>
      <div className='bottom-design' />
    </div>
  );
};

Testimonials.defaultProps = {
  headings: {
    primary: "Student Feedback",
    secondary:
      "We always believe in quality & even if you dont belive us take a look at our student body has to say about us"
  },
  testimonials: [
    {
      name: "Diana Dziedzic",
      desc: "This assignment was done on time, especially before the time and I received an A. The Experts are very Trustworthy and Score more Experts are very reliable.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "KELVIN OPOKU",
      desc: "Their Services and Communication is excellent and I am glad I took their help in my Classes. I got an A and I am very happy. I will tell my friends about this site.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Thomas Simpson",
      desc: "They do an excellent job and help me in every class. I finally passed each class with a score of more than 90% and I am super Happy.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Misheal Boateng",
      desc: "I am very Thankful to Score more in helping my daughter in her test and she passed with a score of more than 95 and I am very happy for her.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Emmanuel Duah",
      desc: "I have been working with them for past few months and they are helping me in my every class and my grades are very good and I am super happy. Thanks for their support.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Michael de Leon",
      desc: "The site gives you Quality and Timely work and they also gives you guarantee of a very good score otherwise they have a policy of a full refund. I will share this site to all of my friends.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Jasleen Kaur",
      desc: "Great Services and Very helpful!!",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Magnatie Soumahoro",
      desc: "Amazing Services and very High-Quality Writing. I will surely refer my friends.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Casey Berry",
      desc: "The Scoremore Experts are very helpful and they will guide you though the process very clearly. I took their help in Economics and Computer Science Classes and my grades as of now are very good. I will refer my friends.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Nathan Wonnell",
      desc: "The Scoremore helped me in 5 of my classes and I passed each class with a score of more than 90%. I am super Happy. Keep it up!!",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Alexandria Ridley",
      desc: "Great Services and Great Communication. I got an A. I am super thrill.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Noah Perrin",
      desc: "Tutors Communication was fantastic and I am very pleased I took their help. They guide me in every step. My grades are A+.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Jon Preng",
      desc: "Tutors showed great knowledge and great Communication.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Danielle Nolan",
      desc: "Tutor Posses Great skills and knowledge. They communicated with me really well and I didn’t feel unsecure at any time.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Katie Henricksen",
      desc: "My Classmate refer me to this site and she said they can help you in every course. She was so true about them. I am really happy that I took my friend advise.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Brandon Jordan",
      desc: "I took their help for my daughter classes as she was facing problems in time management due to multiple works shifts. They helped her in every class and her grade is now over 90%. I am super happy for her.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Carlos Rosario Martinez",
      desc: "Amazing Services and Great Results all because of Score more. Thank you so much.",
      img: {
        src: ManIcon
      }
    },
    {
      name: "Ashley Gold",
      desc: "My grades are above 90% and I am super Happy all because of Score more.",
      img: {
        src: ManIcon
      }
    }
  ]
};

export default Testimonials;
