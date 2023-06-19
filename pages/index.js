import Hero from "@/components/Hero";
import { getAllCourses } from "@/prisma/courses";
import CoursesPage from "./courses";

import About from "@/components/About";
import Testimonials from "./testimonials";

const HomePage = ({ courses }) => {
  return (
    <div>
      <Hero /> <CoursesPage courses={courses} /> <About /> <Testimonials />
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};
