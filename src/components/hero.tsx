import GradientCut from './gradient_cut'
import { BsController, BsHeadphones, BsCodeSlash } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className='hero'>
      <GradientCut position_top={true} />
      <div className='container'>
        <div className='hero__details'>
          <h1> Really Cool Title </h1>
          <p> Something really cool goes here, I don&apos;t know what yet but I will figure it out </p>

          <div className='hero__blocks'>
            <div className='hero__block'>
              <BsController />
            </div>
            <div className='hero__block'>
              <BsHeadphones />
            </div>
            <div className='hero__block'>
              <BsCodeSlash />
            </div>
          </div>
        </div>
      </div>
      <GradientCut position_bottom={true} />
    </section>
  )
}

export default Hero
