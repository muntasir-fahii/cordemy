import { getAllCourses } from "@/prisma/courses";
import Courses from "@/components/Courses";
import SectionTitle from "@/components/SectionTitle";

const CoursesPage = ({ courses }) => {
  return (
    <div>
      <div className="wrapper py-10">
        <SectionTitle
          span="Courses"
          h2="Embark on a Learning Adventure"
          p="Expand your knowledge and skills with our diverse selection of courses"
        />
      </div>
      <div className="wrapper flex flex-wrap gap-10">
        {courses.map((course) => (
          <Courses key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

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
