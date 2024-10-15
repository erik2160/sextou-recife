import './style.css'
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Carrossel() {
  const [slidesPerView, setSlidePerView] = useState(3)
  const swiperRef = useRef(null); // Referência para o Swiper

  const data = [
    {
      id: "1",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "2",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "3",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "4",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "5",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "6",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "7",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
    {
      id: "8",
      image:
        "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
    },
  ];

  useEffect(()=>{

    function alterarSlidePerView(){
      if(window.innerWidth < 720){
        setSlidePerView(1)
      } else {
        setSlidePerView(3)
      }
    }

    


    alterarSlidePerView();
    window.addEventListener('resize', alterarSlidePerView)

    return ( () => {
      window.removeEventListener('resize', alterarSlidePerView)
    })
  }, [])

  const handleMouseEnter = () => {
    swiperRef.current.autoplay.stop(); // Pausar autoplay
  };

  const handleMouseLeave = () => {
    swiperRef.current.autoplay.start(); // Retomar autoplay
  };

  return (
    <>
      <div className="container">
        <Swiper 
        slidesPerView={slidesPerView} 
        pagination={{ clickable: true }} 
        navigation
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configurado
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Pegar referência do Swiper
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt="Slider" className="slide-item" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Carrossel;