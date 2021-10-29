import { useCallback, useEffect, useRef, useState } from "react";
import "./faq.scss";
import { getListData } from "../../common/utilities";
import { CircleHeading } from "../../components";
import { SectionIds } from "../../common/constants";

const DownArrow = ({ variant }) => {
  return (
    <div className='downArrow'>
      <div
        className={`downArrow_icon ${
          variant === "up" ? "downArrow_icon_up" : "downArrow_icon_down"
        }`}
      />
    </div>
  );
};

const Point = ({ question, answer }) => {
  let pointRef = useRef();
  let [isExpanded, setExpanded] = useState(false);
  let clickOutside = useCallback(event => {
    if (!pointRef?.current?.contains(event.target)) {
      setExpanded(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("click", clickOutside);
    return () => {
      window.addEventListener("click", clickOutside);
    };
  }, []);
  return (
    <div className='point' ref={pointRef}>
      <div className='collapse'>
        <div className='question'>
          <div className='question_label'>{question}</div>
          <div className='question_arrow' onClick={() => setExpanded(!isExpanded)}>
            <DownArrow variant={isExpanded ? "up" : "down"} />
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className='expanded'>
          <div className='question'>
            <div className='question_label'>{question}</div>
            <div className='question_arrow' onClick={() => setExpanded(!isExpanded)}>
              <DownArrow variant={isExpanded ? "up" : "down"} />
            </div>
          </div>
          <div className='answer'>{answer}</div>
        </div>
      )}
    </div>
  );
};

const FAQ = ({ headings, faqs }) => {
  faqs = getListData(faqs, 2);
  let { primary, secondary } = headings;
  return (
    <div id={SectionIds.faq} className='faq'>
      <CircleHeading circle='circle'>
        <div className='primary'>{primary}</div>
      </CircleHeading>
      <div className='secondary'>{secondary}</div>
      <div className='points'>
        {faqs &&
          faqs.map(row => {
            return (
              <div className='row'>
                {row.map(item => {
                  return (
                    <div className='column'>
                      <Point {...item} />
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

FAQ.defaultProps = {
  headings: {
    primary: "FAQ's",
    secondary:
      "We have carefully prepared the specialization paths so that you can focus on learning."
  },
  faqs: [
    {
      question: "How can I avail Assignment help with My Assignment Services?",
      answer:
        `Simply provide us with your assignment details through our web form or on chat with our expert. Just follow these easy steps.
        First choose your assignment Subject and Choose your Assignment type and required word count fill your assignment deadline at 
        last please Fill in your contact details like your name and email id. It will Place an instant assignment help order:As soon as 
        you submit your detail, our support team will connect you with an expert who will chat with you to fully comprehend your 
        assignment task and will deliver an HD Grade solution paper well before your deadline.`
    },
    {
      question: "What is MAS Scholar MASS©?",
      answer:
        `MASS© or ‘My Assignment Services Scholar’ is our unique and novel feature to help you throughout your academic promenade. 
        Free registration with MASS© gets you unlimited access to lacs of assignment question files from top University in Australia. 
        Feel free to browse through the learning objectives and grading criterion that are similar to your assignment questions. 
        What’s more? You can even view Assignment Solutions for FREE to understand the expert’s research methodology and the language 
        competence used to write assignment papers that have the same unit codes or are similar to your tasks. Simply search by a relevant 
        keyword and dive into the knowledge, you will not get anywhere else in the world. Click HERE to join MASS©.`
    },
    {
      question: "Who provides the best Online Assignment Help in Australia?",
      answer:
        `Well! you be the judge of that. We take our job with heightened commitment and sincerity which reflects in the thousands of positive reviews that students have shared with us appreciating our assignment help services.
        At My Assignment Services, we believe that student feedback is an apt tool to gauge the quality of academic help services and on that parameter we can safely be deemed as one of the best online assignment help in Australia. Australian University students have chosen us since 2010 to deliver well researched and 100% NON Plagiarised assignment papers because we abide by our commitments.
        The best assignment help in Australia cannot be a “just do my assignment service”. A good academic help service should also focus on the learning of a scholar and ensure that students absorb the knowledge objectives of the university task while sharing ample study resources with them. Visit MASS (My Assignment Services Scholar) for free access to the world’s largest assignment knowledge bank for University scholars.`
    },
    {
      question: "How do I contact customer support? ",
      answer:
        `We are 24x7 available to resolve your assignment related queries. You can chat with or speak to our representatives via the student-friendly 
        online assignment portal. The moment you register with us, we will send you a user id and login credentials and you can contact us through a 
        web app or a superbly user-friendly mobile app. Our customer service team works round the clock to resolve any query you may have; in the 
        shortest possible time.`
    },
    {
      question: "Can your writers meet the tough deadlines? ",
      answer:
        `Yes. We even offer ‘Super Express Assignment Service’ for our premium customers with a turn around time of < 6 hours. 
        When you choose us to do your assignments for you, your task deadline is one of the mandatory details we ask because we understand the importance of it. 
        It is our policy to assign a dedicated expert to your assignment, who whether in research mode or the writing phase, ensures 
        that the assignment is completed well within time and any inputs from your assessment are also timely addressed. Further, we allow you to Live Track 
        the progress of your papers and submit subsequent drafts for your approval, only so you can advise for revisions promptly and get the desired solution within your deadline. `
    },
    {
      question: "Which Subject Assignment Help do you provide?",
      answer:
        `Our in house panel of 5000+ Academic Experts virtually cover every academic discipline taught at Australian Universities. 
        Australian scholars reach out to us for popular graduate and post-graduate courses such as Nursing, Management, Law, History,
        Mathematics, Biology, Biotechnology, Chemistry, Economics, Statistics, Psychology, Art and Design, Digital Marketing, Computer Science,
        Videography and many more.We are a trusted education help service provider for complex assignments, Dissertation Reports and Technical 
        Assignments and millions of students have benefitted from the authenticity of our research and content. Click here to see all services and subjects-list.`
    },
    {
      question: "Are Assignment Solutions and Explanations included in my order?",
      answer:
        `Yes, high-quality assignment solutions along with their explanations are a part of your order. And along with these, 
        you will also receive a free copy of the Turnitin report to verify that the content is completely devoid of plagiarism.
        You are also welcome to consult your academic expert for clearing any doubts that you may have regarding your assignment solution. Order Now!`
    },
    {
      question: "What kind of Assignment resources or samples do you provide?",
      answer:
        `A decade long experience in writing custom university papers has enabled us to curate one of the largest university 
        academic resources in the world. You can search for over a million assignment questions and solution from our ‘Assignment 
        Resource Library’ and can avail our Free Study Resources such as Deakin Reference Generator, Academic Essay Samples, Dissertation 
        and Thesis Proposal Examples, Subject Expert Tips.`
    }
  ]
};

export default FAQ;
