import Testimonials from "@/components/Testimonials";

const data = [
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Henry Nichols",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Mia Lee",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
    name: "Edward Jack",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/women/37.jpg",
    name: "Liona Perker",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Sulaiman Shammi",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Gery Wilson",
  },
  {
    para: "The platform prioritizes the security and privacy of its users, employing robust encryption protocols and trusted payment gateways. Cordemy also offers responsive customer support to address any concerns or queries promptly, ensuring a positive and personalized experience for users.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sofia Hannah",
  },
];

const index = () => {
  return (
    <div>
      <div>
        {data.map((testimonial) => (
          <Testimonial key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default index;
