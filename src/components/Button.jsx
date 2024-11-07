import { useTheme } from "../themes/ThemeContext";

const ButtonTheme = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <button className="light" onClick={changeTheme}>
      Change to {theme === "light" ? "dark" : "light"}
    </button>
  );
};

export default ButtonTheme;
