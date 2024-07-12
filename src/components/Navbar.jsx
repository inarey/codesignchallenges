import { useState, useEffect } from 'react';
import {
  logo,
  search,
  sun,
  bell,
  share,
  thumb,
  watermark,
  moon,
} from '../assets/images';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <div>
        <header className='w-screen h-screen flex flex-col justify-center items-start gap-32 bg-grays-500 dark:bg-mixdark-500'>
          <nav className='flex flex-no-wrap items-center justify-between fixed top-0 w-full  py-1 px-14 bg-mixdark-300 shadow-md shadow-primary-50/5 dark:bg-mixdark-400 dark:shadow-primary-500/10'>
            {/* brand logo */}
            <a className='flex justify-center items-center gap-1 p-2 mx-4 cursor-pointer'>
              <div className='w-12 h-12'>
                <img src={logo} alt='escodesign-logo' />
              </div>
              <div className='flex flox-col justify-start items-center'>
                <h4 className='text-3xl text-grays-50 font-medium tracking-wide'>
                  es
                </h4>
                <h4 className='text-3xl text-primary-500 font-medium tracking-wide'>
                  code
                </h4>
                <h4 className='text-3xl text-grays-50 tracking-wide'>sign</h4>
              </div>
            </a>

            {/* navlinks */}
            <div className='flex justify-center items-center gap-8 mx-4'>
              <ul className='flex flex-row gap-4 cursor-pointer'>
                <li className='text-xl text-primary-500 hover:text-mixdark-50'>
                  About
                </li>
                <li className='text-xl  text-neutral-300  hover:text-mixdark-50'>
                  Packages
                </li>
                <li className='text-xl text-neutral-300  hover:text-mixdark-50'>
                  Places
                </li>
                <li className='text-xl text-neutral-300  hover:text-mixdark-50'>
                  Blogs
                </li>
                <li className='text-xl text-neutral-300 hover:text-mixdark-50'>
                  Contact
                </li>
              </ul>
            </div>

            {/* search bar */}
            <div className='flex gap-1 justify-between'>
              <div className='flex justify-center items-center gap-4 w-auto px-4 py-1 rounded-full border border-primary-200 mx-1 '>
                <input
                  type='text'
                  className='bg-transparent focus:outline-none focus:border-none pl-2 placeholder-text-sm text-dark-50 italic'
                  placeholder='I am looking for'
                />
                <img src={search} alt='search' className='w-6 h-6' />
              </div>
              <button
                onClick={toggleTheme}
                className='flex justify-center items-center gap-12 w-[57px] px-2 py-1 rounded-full border border-primary-300 cursor-pointer'
              >
                {theme === 'light' ? (
                  <img src={moon} alt='dark mode' className='w-6 h-6' />
                ) : (
                  <img src={sun} alt='dark mode' className='w-6 h-6' />
                )}
              </button>
            </div>
          </nav>
          {/* hero section */}
          <section className='pb-16 pt-32'>
            <img
              src={watermark}
              alt='watermark'
              className='fixed bottom-0 right-1 cover w-[800px] h-[708.97px]'
            />
            <div className='flex flex-col gap-8 justify-start items-start pb-24  w-[945px] ml-24'>
              <h1 className='text-6xl dark:text-grays-50 text-mixdark-400'>
                #1 Light and Dark Sticky Navbar
              </h1>
              <h4 className='text-3xl  dark:text-primary-50 text-primary-500'>
                UX/UI Figma design to HTML, Tailwind CSS, JavaScript, and React
                Challenges
              </h4>
            </div>
            <div className='flex justify-left items-center gap-4 ml-24'>
              <a className='flex justify-center align-center cursor-pointer'>
                <button className='flex gap-2 align-baseline justify-start text-xl bg-secondary-500 text-mixdark-500 font-medium py-4 px-8 rounded-md hover:bg-secondary-100'>
                  Subscribe
                  <img src={bell} alt='subscribe' className='w-5 h-5' />
                </button>
              </a>
              <a className='flex justify-center align-center cursor-pointer'>
                <button className='flex gap-2 align-baseline justify-start text-xl dark:text-grays-50 text-mixdark-400  font-medium py-4 px-8 rounded-md border-2 border-secondary-500 hover:bg-secondary-50 dark:hover:bg-mixdark-300'>
                  Like
                  <img src={thumb} alt='like' className='w-5 h-5' />
                </button>
              </a>
              <a className='flex justify-center align-center cursor-pointer'>
                <button className='flex gap-2 align-baseline justify-start text-xl dark:text-grays-50 text-mixdark-400 font-medium py-4 px-8 rounded-md border-2 border-secondary-500 hover:bg-secondary-50 dark:hover:bg-mixdark-300'>
                  Share
                  <img src={share} alt='share' className='w-5 h-5' />
                </button>
              </a>
            </div>
          </section>
        </header>

        {/* about me section */}
        <section className='flex justify-center items-center bg-primary-500/50 dark:bg-mixdark-300 w-screen h-screen mx-auto'>
          <div className='flex flex-col justify-center items-center gap-2 p-16'>
            <h4 className='text-3xl text-primary-500 dark:text-primary-200 '>
              Call me Es
            </h4>
            <h2 className='text-4xl text-grays-500 '>
              I will be your Full-Stack Software Developer
            </h2>
            <h5 className='text-2xl text-primary-500 dark:text-primary-200'>
              Contact details on the description box below
            </h5>
          </div>
        </section>
      </div>
    </>
  );
};
export default Navbar;
