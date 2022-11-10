import useTheme from "../hooks/useTheme";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`App ${theme}`}>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
