// import {img1} from '../../assets/img1.jpeg'
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/world.png'
import img3 from '../../assets/quality.png'
import img4 from '../../assets/offers.png'
import img5 from '../../assets/secure.png'

function Home() {
  return (
    <div>
      <div className='relative h-full flex justify-center items-center'>
      <img src={img1} alt="Hero Image" className='  object-cover  grayscale-[40%] '  />
      <div className='absolute md:top-[20%] flex gap-4 flex-col sm:p-10'>
        <div>
        <p className='text-3xl sm:text-6xl lg:text-8xl font-extrabold text-white'>Raining Offers For Hot Summer!</p>
        <p className='text-2xl text-white font-semibold'>25% Off On All Products</p>
        </div>
        <div className='flex gap-4 flex-col sm:flex-row'>
          <button className='px-4 py-2 rounded-sm border border-white cursor-pointer uppercase font-bold bg-white text-black hover:text-white hover:bg-black transition-all duration-300'>shop now</button>
          <button className='px-4 py-2 rounded-sm border border-white text-white cursor-pointer uppercase font-bold hover:text-black hover:bg-white   transition-all duration-300'>find more</button>
        </div>
      </div>
      </div>
      <div className='flex flex-col sm:flex-row  items-center justify-center gap-6 p-10 md:gap-16'>
        <div className='flex flex-col justify-center items-center'>
          <img src={img2} className='w-20 ' alt="" />
          <p>Worldwide Shipping</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={img3} className='w-20 ' alt="" />
          <p>Best Quality</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={img4} className='w-20 ' alt="" />
          <p>Best Offers</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={img5} className='w-20 ' alt="" />
          <p>Secure Payments</p>
        </div>
      </div>
    </div>
  )
}

export default Home