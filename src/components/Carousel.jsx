import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({ items }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {items.map((item) => (
        <div key={item._id} className="p-3">
          <div className="bg-white shadow p-4 rounded">
            <h3 className="text-xl">{item.title}</h3>
            <p>{item.description.substring(0, 60)}...</p>
          </div>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel