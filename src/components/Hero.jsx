import {logo} from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'> 
    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='ResumoAi_logo' className='w-28 object-contain' />
        <button type="button" onClick={() => window.open('https://github.com/joaomarcosjova')} className='black_btn'>GitHub</button>
    </nav>

    <h1 className='head_text'>
        Summarize Articles & PDF with <br className='max-md:hidden' /> 
        <span className='orange_gradient'>ResumoAI</span>
    </h1>
    <h2 className='desc'>Simplify your reading with ResumoAi, an open-source summarizer that transforms lengthy articles into clear and concise summaries</h2>

    </header>
  )
}

export default Hero