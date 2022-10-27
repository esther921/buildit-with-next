import Navbar from '../components/Navbar'
import Home_head_pictures from '../components/home-head-pictures'
import Section_innovative from '../components/section-innovative'
import Section_about_us from '../components/section-about-us'
import Section_properties from '../components/section-properties'

export default function Home() {
  return (
    <>
    <div className='space-y-20 bg-gradient-to-t from-gradient-blue-1 to-gradient-blue-2'>
        <Navbar/>
        <div className='pb-20'>
          <Home_head_pictures/>
        </div>
    </div>

    <div className='pt-32 pb-48 bg-light-blue'>
      <Section_innovative/>
    </div>

    <div className='bg-gradient-blue-2 pb-32'>
      <Section_about_us />
    </div>

    <div>
      <Section_properties />
    </div>
    </>
    
  )
}
