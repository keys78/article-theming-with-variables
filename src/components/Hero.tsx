import heroIcon from '../assets/png/hero.png'

const Hero = () => {
  return (
    <section className="lg:px-[160px] sm:px-[40px] px-[16px]">
      <div className='flex sm:flex-row flex-col items-start justify-between sm:pt-32 pt-12 sm:text-left text-center'>
        <aside className='max-w-[550px]'>
          <h2 className='sm:text-5xl text-3xl'>Theming With CSS Variables</h2>
          <p className='pt-5'>Customizing themes using CSS Variables alongside Tailwind CSS offers a flexible way to style web applications. CSS Variables enable easy theme adjustments, while Tailwind CSS's utility classes simplify and speed up the styling process for consistent designs.</p>
        </aside>
        <aside className='sm:w-auto w-full sm:block flex items-center justify-center sm:pt-0 pt-10'>
          <img className='min-w-[300px]' src={heroIcon} alt="icon" />
        </aside>
      </div>
    </section>
  )
}

export default Hero