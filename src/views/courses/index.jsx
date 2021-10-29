import "./courses.scss";
import {
  ComputerScience,
  EssayService,
  Economics, //
  Accounting,
  Engineering,
  Finance,
  Mathematics,
  Statistics,
  arizona,
  boston,
  california,
  capella,
  download,
  irvin,
  kent,
  newheaven,
  northwesten,
  pasdena,
  phoenix,
  ramapago,
  rutgers,
  saint,
  south,
  staryer,
  statecenter,
  suny
} from "../../images";
import { CircleHeading } from "../../components";

import { getListData } from "../../common/utilities";
import { SectionIds } from "../../common/constants";
import { useCallback, useEffect, useRef, useState } from "react";

const CourseItem = ({ img, label, points }) => {
  return (
    <div className='column'>
      <div className='course'>
        <div className='course_inner'>
          <div className='course_front'>
            <img {...img} />
            <div className='label'>{label}</div>
          </div>
          <div className='course_back'>
            {points.map(label => {
              return (
                <div>
                  <div className='oval' />
                  <div className='label'>{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = ({ items }) => {
  let cellCount = 4;
  let coursesCard = useRef();
  let [rightArrow, leftArrow] = ["<", ">"];

  items = getListData(items, cellCount);
  return (
    <>
      <div className='courses-wrapper' ref={coursesCard}>
        {items &&
          items.map(row => {
            return (
              <div className='row'>
                {row.map(item => {
                  return <CourseItem {...item} />;
                })}
              </div>
            );
          })}
      </div>
      <div className='buttons'>
        <div
          className='button'
          onClick={() => {
            coursesCard.current.scrollBy(-100, 0);
          }}
        >
          {rightArrow}
        </div>
        <div
          className='button'
          onClick={() => {
            coursesCard.current.scrollBy(100, 0);
          }}
        >
          {leftArrow}
        </div>
      </div>
    </>
  );
};

const Universities = ({ items }) => {
  let [cellCount, setCellCount] = useState(4);
  let universityCard = useRef();
  let [rightArrow, leftArrow] = ["<", ">"];
  let changeCellCount = useCallback(() => {
    let width = window.innerWidth;

    if (width < 1024) {
      setCellCount(8);
    } else {
      setCellCount(4);
    }
  }, []);
  useEffect(() => {
    changeCellCount();
    window.addEventListener("resize", changeCellCount);
    return () => {
      window.removeEventListener("resize", changeCellCount);
    };
  }, []);
  items = getListData(items, cellCount);
  return (
    <div className='universities-wrapper'>
      <div className='universities' ref={universityCard}>
        {items &&
          items.map(row => {
            return (
              <div className='row'>
                {row.map(item => {
                  return (
                    <div className='column'>
                      <img {...item} />
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
      {cellCount > 4 && (
        <div className='buttons'>
          <div
            className='button'
            onClick={() => {
              universityCard.current.scrollBy(-100, 0);
            }}
          >
            {rightArrow}
          </div>
          <div
            className='button'
            onClick={() => {
              universityCard.current.scrollBy(100, 0);
            }}
          >
            {leftArrow}
          </div>
        </div>
      )}
    </div>
  );
};

const Course = ({ headings, courses, universities }) => {
  let { primary, secondary } = headings;
  return (
    <div id={SectionIds.courses} className='courses'>
      <CircleHeading>
        <div className='primary'>{primary}</div>
      </CircleHeading>
      <div className='secondary'>{secondary}</div>
      <Courses items={courses} />
      <Universities items={universities} />
    </div>
  );
};

Course.defaultProps = {
  headings: {
    primary: "Subjects",
    secondary:
      "We have carefully prepared the specialization paths so that you can focus on learning."
  },
  courses: [
    {
      img: {
        src: ComputerScience,
        alt: "computer science"
      },
      label: "Computer Science/Network/IT",
      points: [
        "Web Designing",
        "Database Management",
        "C,C++,Java,Php",
        "App Designing",
        "Information Systems",
        "Ms Access",
        "UNIX/LINUX"
      ]
    },
    {
      img: {
        src: Economics,
        alt: "Economics"
      },
      label: "Economics",
      points: ["Money & Banking", "Econometrics", "Internation Trade", "Macro & Micro Economics"]
    },
    {
      img: {
        src: Accounting,
        alt: "Accounting"
      },
      label: "Accounting",
      points: [
        "Financial Accounting",
        "Managerial Accounting",
        "Taxation Accounting",
        "Forensic Accounting",
        "International Accounting"
      ]
    },
    {
      img: {
        src: Finance,
        alt: "Finance"
      },
      label: "Finance",
      points: [
        "Capital Budgeting",
        "Portfolio Management",
        "Budget Analysis",
        "Personal Finance",
        "Corporate Finance",
        "Investment & Security Analysis"
      ]
    },
    {
      img: {
        src: Statistics,
        alt: "Statistics"
      },
      label: "Statistics",
      points: ["Business Statistics", "Elementary Statistics", "R, SPSS, Excel", "Mintab, SAS"]
    },
    {
      img: {
        src: Mathematics,
        alt: "Mathematics"
      },
      label: "Mathematics",
      points: ["Algebra", "Calculus", "Linear Algebra", "Geometry", "Applied Mathematics"]
    },
    {
      img: {
        src: Engineering,
        alt: "Engineering"
      },
      label: "Engineering",
      points: [
        "Civil",
        "Mechanical",
        "Electronics",
        "Electrical",
        "Telecommunication",
        "Architecture & Design",
        "Operation Management"
      ]
    },
    {
      img: {
        src: EssayService,
        alt: "Essay Service/Research writing/Dissertation"
      },
      label: "Essay Service/Research writing/Dissertation",
      points: [
        "Law",
        "Management",
        "Nursing/Medicine",
        "Psyhology",
        "Humanties",
        "Philosopy",
        "English",
        "Human Resources",
        "History"
      ]
    }
  ],
  universities: [
    {
      src: arizona,
      alt: "Arizona"
    },
    {
      src: boston,
      alt: "Boston"
    },
    {
      src: california,
      alt: "California"
    },
    {
      src: capella,
      alt: "Capella"
    },
    {
      src: download,
      alt: "Download"
    },
    {
      src: irvin,
      alt: "Irvin"
    },
    {
      src: kent,
      alt: "Kent"
    },
    {
      src: newheaven,
      alt: "newheaven"
    },
    {
      src: northwesten,
      alt: "northwesten"
    },
    {
      src: pasdena,
      alt: "pasdena"
    },
    {
      src: phoenix,
      alt: "phoenix"
    },
    {
      src: ramapago,
      alt: "ramapago"
    },
    {
      src: rutgers,
      alt: "rutgers"
    },
    {
      src: saint,
      alt: "saint"
    },
    {
      src: south,
      alt: "south"
    },
    {
      src: staryer,
      alt: "staryer"
    },
    // {
    //   src: statecenter,
    //   alt: "statecenter"
    // },
    // {
    //   src: suny,
    //   alt: "suny"
    // }
  ]
};

export default Course;
