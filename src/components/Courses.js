import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import dataCourses from "../data/courses";
import { useState, useEffect } from "react";
import styles from "./Courses.module.css";
import useTheme from "../hooks/useTheme";

const SORT_KEY = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEY.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(dataCourses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      navigate(".");
      setSortKey();
      setSortedCourses([...dataCourses]);
    }
  }, [sortKey, navigate]);

  return (
    <div className={`App ${theme}`}>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : "Courses"}</h1>
      {sortedCourses.map((course) => (
        <Link className={styles.courseLink} to={course.slug} key={course.id}>
          {course.title}
        </Link>
      ))}
    </div>
  );
};

export default Courses;
