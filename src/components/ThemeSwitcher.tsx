import { useEffect, useState } from 'react';
import light from '../assets/svg/light.svg';
import dark from '../assets/svg/dark.svg';
import third from '../assets/svg/third.svg';

type Theme = {
  src: string;
  alt: string;
  name: string;
};

const themes: Theme[] = [
  { src: light, alt: 'Light', name: 'light' },
  { src: dark, alt: 'Dark', name: 'dark' },
  { src: third, alt: 'Third', name: 'third' },
];

const ThemeSwitcher = () => {
  const [selectedTheme, setSelectedTheme] = useState(() => localStorage.getItem('selectedTheme') || '');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)');

    const updateTheme = () => {
      const storedTheme = localStorage.getItem('selectedTheme');
      const setTheme = (theme: string) => {
        document.documentElement.setAttribute('data-theme', theme);
        setSelectedTheme(theme);
      };

      if (storedTheme !== null) {
        setTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setTheme('dark');
            break;
          case prefersLight.matches:
            setTheme('light');
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener('change', updateTheme);
    prefersLight.addEventListener('change', updateTheme);

    return () => {
      prefersDark.removeEventListener('change', updateTheme);
      prefersLight.removeEventListener('change', updateTheme);
    };
  }, []);

  const handleThemeChange = (themeName: string) => {
    setSelectedTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('selectedTheme', themeName);
  };

  return (
    <section className='bg-baseThree px-5 py-4 absolute lg:right-36 sm:right-12 right-4 top-24'>
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-10'>
        {themes.map((theme, index) => (
          <div className={`max-w-[150px] p-1 ${selectedTheme === theme.name && 'border-2 border-green-500 rounded-md'}`} key={index}>
            <label>
              <input
                type='radio'
                name='theme'
                value={theme.name}
                checked={selectedTheme === theme.name}
                onChange={() => handleThemeChange(theme.name)}
                className='hidden'
              />
              <img className='rounded-md cursor-pointer' src={theme.src} alt={theme.alt} />
              <div className='flex items-center justify-between mt-2'>
                <h5 className='capitalize text-sm text-baseTwo'>{theme.name} Mode</h5>
                <div className='bg-green-500 rounded-full w-[20px] flex items-center justify-center text-white text-sm'>{selectedTheme === theme.name && <span>&#10003;</span>}</div>
              </div>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemeSwitcher;
