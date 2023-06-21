import { useState } from "react";
import { GrFormAdd, GrFormSubtract } from "react-icons/gr";
import SectionTitle from "./SectionTitle";

const data = [
  {
    question: "How can Cordemy help me advance my career?",
    answer:
      "Cordemy offers a wide range of courses designed to enhance your professional skills and knowledge. Whether you're looking to learn coding languages, improve your project management abilities, or develop leadership skills, Cordemy provides the resources you need to excel in your career.",
  },
  {
    question: "Can I interact with instructors and fellow learners on Cordemy?",
    answer:
      "Absolutely! Cordemy promotes a collaborative learning environment. You can engage in discussions, ask questions, and seek guidance from both instructors and other learners through the platform's interactive forums and community features.",
  },
  {
    question: "Does Cordemy offer certifications upon course completion?",
    answer:
      "Yes, Cordemy provides certificates of completion for courses. Once you successfully finish a course, you will receive a digital certificate that can be shared on professional platforms, such as LinkedIn, to showcase your newfound skills and knowledge.",
  },
  {
    question:
      "Can I try out a course on Cordemy before committing to a subscription?",
    answer:
      "Yes, Cordemy offers a free trial period during which you can explore and experience a selection of courses. This allows you to get a feel for the platform, the quality of instruction, and the course content before making a subscription commitment.",
  },
  {
    question:
      "Are the courses on Cordemy self-paced, or do they follow a specific schedule?",
    answer:
      " Cordemy courses are self-paced, meaning you have the freedom to start and complete them according to your own schedule. There are no fixed deadlines, allowing you to learn at your own convenience and set a pace that suits your learning style and commitments.",
  },
  {
    question: "Can I access Cordemy's course materials offline?",
    answer:
      "Yes, Cordemy offers an offline learning feature. You can download course materials, including videos and reading materials, to access them without an internet connection. This feature enables you to continue learning even in environments with limited or no internet access.",
  },
];

const Faqs = ({}) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  return (
    <div
      // data-aos="fade-up"
      // data-aos-duration="1000"
      className="container mx-auto justify-center items-center p-16 min-h-screen  border-r-indigo-500"
    >
      <SectionTitle
        span="FAQs"
        h2=" Frequantly asked Qustions"
        p="Have question? we're here to help."
      />

      <div className="grid items-center justify-center w-[50rem] mx-auto mt-10 gap-5">
        {data.map((faq, i) => (
          <div
            // data-aos="fade-up"
            // data-aos-duration="1000"
            // data-aos-delay="250"
            key={i}
            className="grid items-center justify-center border-b-2 mb-5 "
          >
            <div className="flex justify-between" onClick={() => toggle(i)}>
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="cursor-pointer ">
                {selected === i ? (
                  <GrFormSubtract className="text-2xl " />
                ) : (
                  <GrFormAdd className="text-2xl" />
                )}
              </span>
            </div>
            <div className="mb-5">
              <p
                className={selected === i ? "faq-content-show" : "faq-content"}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
