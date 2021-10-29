import "./tutorial.scss";
import { CircleHeading, Button } from "../../components";
import { SectionIds } from "../../common/constants";

const Headings = ({ primary, secondary, btn }) => {
  return (
    <div className='headings'>
      <CircleHeading circle={".circle"}>
        <div className='primary'>{primary}</div>
      </CircleHeading>
      <div className='secondary'>{secondary}</div>
      <Button {...btn} />
    </div>
  );
};

const Bubble = ({ count, label }) => {
  return (
    <div className='bubble'>
      <div className='count'>{count}</div>
      <div className='label'>{label}</div>
    </div>
  );
};

const Bubbles = ({ bubble_1, bubble_2, bubble_3 }) => {
  return (
    <div className='bubbles'>
      <div className='bubbles_1'>
        <Bubble {...bubble_1} />
      </div>
      <div className='bubbles_2'>
        <Bubble {...bubble_2} />
      </div>
      <div className='bubbles_3'>
        <Bubble {...bubble_3} />
      </div>
    </div>
  );
};

const Tutorials = ({ headings, bubbles }) => {
  return (
    <div  id={SectionIds.tutorials}  className='tutorials'>
      <Headings {...headings} />
      <Bubbles {...bubbles} />
    </div>
  );
};

Tutorials.defaultProps = {
  headings: {
    primary: "Over 7000 Tutorials from 20 Courses",
    secondary:
      "Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open place day great wherein heaven sixth lesser subdue fowl",
    btn: {
      label: "Enroll a Course",
      callback: () => {}
    }
  },
  bubbles: {
    bubble_1: {
      count: "20+",
      label: "Courses"
    },
    bubble_2: {
      count: "7386",
      label: "Courses"
    },
    bubble_3: {
      count: "20+",
      label: "Courses"
    }
  }
};

export default Tutorials;
