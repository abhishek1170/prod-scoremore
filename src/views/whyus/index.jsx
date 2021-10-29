import "./whyus.scss";
import { Available, Plagiarism, ProofReading, Academics, Quality, LanguageLesson } from "../../images";
import { getListData } from "../../common/utilities";
import { CircleHeading } from "../../components";
import { SectionIds } from "../../common/constants";
import { useCallback, useEffect, useState } from "react";

const WeDo = ({ headings, points }) => {
  let { primary, secondary } = headings;
  let [cellCount, setCellCount] = useState(3);
  let changeCellCount = useCallback(() => {
    let width = window.innerWidth;
    if (width < 768) {
      setCellCount(2);
    } else {
      setCellCount(3);
    }
  }, []);
  useEffect(() => {
    changeCellCount();
    window.addEventListener("resize", changeCellCount);
    return () => {
      window.removeEventListener("resize", changeCellCount);
    };
  }, []);
  points = getListData(points, cellCount);
  return (
    <div id={SectionIds.whyus} className='whyus'>
      <CircleHeading circle='circle'>
        <div className='primary'>{primary}</div>
      </CircleHeading>
      <div className='secondary'>{secondary}</div>
      <div className='points'>
        {points &&
          points.map(row => {
            return (
              <div className='row'>
                {row.map(({ img, label }) => {
                  return (
                    <div className='column point'>
                      <img {...img} />
                      <div className='label'>{label}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

WeDo.defaultProps = {
  headings: {
    primary: "Why us?",
    secondary:
      "Our expert always maintain best quality & always meet with student expectations."
  },
  points: [
    {
      img: { src: Available, alt: "Referencing" },
      label: "24*7 available"
    },
    {
      img: { src: Plagiarism, alt: "Plagiarism Check" },
      label: "Plagiarism Check"
    },
    {
      img: { src: ProofReading, alt: "Proofreading and Editing" },
      label: "Proofreading and Editing"
    },
    {
      img: { src: Academics, alt: "Academics Consultation" },
      label: "Experts Consultation"
    },
    {
      img: { src: Quality, alt: "Quality Score Evaluation" },
      label: "Quality Score Evaluation"
    },
    {
      img: { src: LanguageLesson, alt: "Academic Language Lessons" },
      label: "Live doubt session"
    }
  ]
};

export default WeDo;
