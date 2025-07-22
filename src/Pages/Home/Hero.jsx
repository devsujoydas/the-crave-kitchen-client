 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'

import { EffectFade, Autoplay } from 'swiper/modules'
const Hero = () => {
 

  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false
        }}
        modules={[EffectFade, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide><img className='h-[85vh] w-full object-cover' src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[85vh] w-full object-cover' src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide><img className='h-[85vh] w-full object-cover' src="https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero