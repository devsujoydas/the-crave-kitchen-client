import ChefRecommends from "./ChefRecommends"
import FromOurMenu from "./FromOurMenu"
import FromOurMenu2 from "./FromOurMenu2"
import Hero from "./Hero"
import OrderOnline from "./OrderOnline"
import Testimonial from "./Testimonial"

const Home = () => {
  return (
    <div>
      <Hero />
      <OrderOnline />
      <FromOurMenu />
      <ChefRecommends />
      <FromOurMenu2 />
      <Testimonial />
    </div>
  )
}

export default Home