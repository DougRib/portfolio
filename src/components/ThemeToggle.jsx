import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      className={cn(
        "max-sm:hidden p-2 rounded-full duration-300 transition-colors",
        isDarkMode
          ? "hover:transition-transform duration-500 hover:shadow-[0_0_15px_rgba(253,224,71,0.6)] "
          : "hover:transition-transform duration-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
      )}
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600 " />
      )}
    </button>
  );
};
