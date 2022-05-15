import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useColorSwitcher } from 'nextjs-color-mode';
import { ThemeContext } from 'pages/_app';
import { useContext, useEffect } from 'react';

export default function ColorSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const { toggleTheme, colorMode } = useColorSwitcher();

  useEffect(() => {
    setTheme(colorMode)
  }, [colorMode])


  const sunIcon = (
    <FontAwesomeIcon icon={faSun} size="3x" />
  );

  const moonIcon = (
    <FontAwesomeIcon icon={faMoon} size="3x" />
  );

  return <a onClick={toggleTheme}>{colorMode === 'light' ? moonIcon : sunIcon}</a>;
}