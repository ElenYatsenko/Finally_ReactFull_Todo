import useTheme from "../hooks/useTheme";

const Contact = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
