import { Link, useNavigate, useParams } from "react-router-dom";
import dataCourses from "../data/courses";
import { useEffect } from "react";
import styles from "./SingleCourse.module.css";
import useTheme from "../hooks/useTheme";

const SingleCourse = () => {
  const { theme, toggleTheme } = useTheme();
  const params = useParams();
  const navigate = useNavigate();
  const course = dataCourses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);
  return (
    <div className={`App ${theme}`}>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      <Link className={styles.linkCourse} to=".." relative="path">
        All courses
      </Link>
    </div>
  );
};

export default SingleCourse;
