import SectionTitle from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    para: "Cordemy has been a game-changer for me! The courses are well-structured and taught by industry experts. The platform is user-friendly and offers a wide range of courses to choose from. I've learned valuable skills that have helped me advance in my career. Highly recommended.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Henry Nichols",
  },
  {
    para: "I've tried many e-learning platforms, but Cordemy stands out. The quality of the courses is exceptional, and the instructors are knowledgeable and engaging. The interactive learning materials and assessments keep me motivated and help me retain the information effectively. Thank you, Cordemy, for making learning enjoyable.",
    img: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Maria Usuf",
  },
  {
    para: "Cordemy has revolutionized the way I learn. The flexibility to access courses anytime, anywhere, has been a game-changer for my busy schedule. The platform's intuitive interface and seamless navigation make it a pleasure to use. I've gained new skills and knowledge that have boosted my confidence and opened up new opportunities.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Edward Jack",
  },
  {
    para: "I can't speak highly enough about Cordemy! The range of courses is impressive, covering various topics and industries. The instructors are not only experts in their fields but also excellent communicators. The community forums provide a supportive environment for networking and exchanging ideas. Cordemy has truly empowered me to take my professional development to new heights.",
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Liona Perker",
  },
  {
    para: "As a lifelong learner, Cordemy has become my go-to platform for continuous education. The courses are up-to-date and relevant, ensuring that I stay ahead in a fast-changing world. The progress tracking and certificates of completion add value to my resume. Cordemy has exceeded my expectations and has become an invaluable resource in my learning journey.",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Sulaiman Shammi",
  },
  {
    para: "Cordemy's commitment to quality is evident in every aspect. The courses are comprehensive and well-structured, allowing me to learn at my own pace. The interactive elements, such as quizzes and hands-on exercises, make the learning process engaging and enjoyable. With Cordemy, I've gained new skills and confidence in my abilities. Thank you for providing such a fantastic platform.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Gery Wilson",
  },
  {
    para: "I highly recommend Cordemy for anyone looking to acquire new skills or enhance existing ones. The platform offers a diverse range of courses, catering to different learning preferences. The instructors are passionate and provide clear explanations. Cordemy's affordable pricing and unlimited access make it accessible to learners of all backgrounds. It's definitely worth every penny.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sofia Hannah",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Mim Hafsa",
  },
  {
    para: "Cordemy has been a game-changer in my education journey. The platform's intuitive design and seamless functionality make it easy to navigate and access course materials. The quality of the content is outstanding, and the instructors are passionate and knowledgeable. Cordemy has helped me gain new skills and confidence, and I'm grateful for the opportunity to learn from the comfort of my own home.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Siam Mahmud",
  },
  {
    para: "I'm truly impressed with Cordemy's commitment to excellence. The platform offers a wide range of courses that are relevant and practical. The course content is engaging, and the instructors go above and beyond to ensure a comprehensive learning experience. Cordemy's dedication to continuous improvement and customer satisfaction sets it apart from other e-learning platforms. I wholeheartedly endorse Cordemy for anyone seeking top-notch education online.",
    img: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Alison Fiona",
  },
  {
    para: "Cordemy has been a lifesaver for me during the pandemic. With in-person learning disrupted, I turned to Cordemy to continue my education remotely. The platform's seamless video lectures and interactive exercises have made the transition smooth and enjoyable. The customer support team is also incredibly responsive and helpful. Cordemy has truly made online learning a breeze for me.",
    img: "https://randomuser.me/api/portraits/women/91.jpg",
    name: "Natasha Wilson",
  },
  {
    para: "I've always wanted to learn new skills but found it challenging to fit traditional classes into my busy schedule. Cordemy has solved that problem for me. The self-paced courses allow me to learn at my own convenience, and the bite-sized lessons make it easy to fit learning into my daily routine. The quality of the courses and the knowledge of the instructors are top-notch. Cordemy has made learning accessible and achievable for busy professionals like me.",
    img: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Sulaman Miah",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const index = () => {
  return (
    <div className="wrapper py-10 min-h-full ">
      <SectionTitle span="Testimonials" h2="Students Thrive with e-Learning" />
      <div>
        <Slider {...settings}>
          {data.map((testimonial) => (
            <Testimonials key={testimonial.name} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default index;
