import Navbar from '../components/Navbar'
import About_us_head_pictures from '../components/about-us-head-picture'
import Logo_section_about from '../components/logo-section-about'
import About_cards_section from '../components/about-cards-section'

export default function Home() {
  return (
    <>
    <div className='space-y-20 bg-gradient-to-t from-gradient-blue-1 to-gradient-blue-2'>
        <Navbar/>
        <div className='pb-12'>
            <About_us_head_pictures/>
        </div>
    </div>
    <div className='bg-light-blue pb-28'>
          <Logo_section_about/>
    </div>
    <div className='bg-gradient-blue-2 pb-24'>
      <About_cards_section />
    </div>
    </>
    
  )
}
