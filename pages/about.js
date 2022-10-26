import Navbar from '../components/Navbar'
import About_us_head_pictures from '../components/about-us-head-picture'

export default function Home() {
  return (
    <>
    <div className='space-y-20 bg-gradient-to-t from-gradient-blue-1 to-gradient-blue-2'>
        <Navbar/>
        <div>
            <About_us_head_pictures/>
        </div>
    </div>
    </>
    
  )
}
