import "./wedo.scss";
import { Disseration, Research, Essay, CaseStudy, Thesis, Exam } from "../../images";
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
    <div className='wedo-wrapper'>
      <div id={SectionIds.wedo} className='wedo'>
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
    </div>
  );
};

WeDo.defaultProps = {
  headings: {
    primary: "What we do?",
    secondary:
      "Our experts provide instant help. Choose our services for guranteed grades"
  },
  points: [
    {
      img: { src: Disseration, alt: "Dissertation Writing Service" },
      label: "Dissertation Writing Service"
    },
    {
      img: { src: Essay, alt: "Essay Writing Help" },
      label: "Essay Writing Help"
    },
    {
      img: { src: Thesis, alt: "Thesis Writing Help" },
      label: "Thesis Writing Help"
    },
    {
      img: { src: Research, alt: "Research Proposal Writing Help" },
      label: "Research Proposal Writing Help"
    },
    {
      img: { src: CaseStudy, alt: "Case Study Writing Help" },
      label: "Case Study Writing Help"
    },
    {
      img: { src: Exam, alt: "Online Exam & Quiz Assistance" },
      label: "Online Exam & Quiz Assistance"
    }
  ]
};

export default WeDo;
