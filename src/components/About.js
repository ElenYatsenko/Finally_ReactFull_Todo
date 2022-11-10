import useTheme from "../hooks/useTheme";

const About = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>About</h1>
    </div>
  );
};

export default About;
