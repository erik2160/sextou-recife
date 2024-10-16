import "./style.css";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function Carrossel() {
    const [slidesPerView, setSlidePerView] = useState(3);
    const swiperRef = useRef(null); // Referência para o Swiper

    const data = [
        {
            id: "1",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "2",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "3",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "4",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "5",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "6",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "7",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
        {
            id: "8",
            image: "https://img.odcdn.com.br/wp-content/uploads/2024/05/shutterstock_2261596665-1.jpg",
        },
    ];

    useEffect(() => {
        function alterarSlidePerView() {
            if (window.innerWidth <= 768) {
                setSlidePerView(1);
            } else if (window.innerWidth <= 1024) {
                setSlidePerView(2);
            } else if (window.innerWidth <= 1280) {
                setSlidePerView(3);
            } else {
                setSlidePerView(4);
            }
        }

        alterarSlidePerView();
        window.addEventListener("resize", alterarSlidePerView);

        return () => {
            window.removeEventListener("resize", alterarSlidePerView);
        };
    }, []);

    const handleMouseEnter = () => {
        swiperRef.current.autoplay.stop(); // Pausar autoplay
    };

    const handleMouseLeave = () => {
        swiperRef.current.autoplay.start(); // Retomar autoplay
    };

    return (
        <>
            <div className="container">
                <h1>Sinta o charme de Recife na veia!</h1>
                <Swiper
                    slidesPerView={slidesPerView}
                    navigation
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay configurado
                    onSwiper={(swiper) => (swiperRef.current = swiper)} // Pegar referência do Swiper
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                                onMouseEnter={handleMouseEnter}
                                onMouseOut={handleMouseLeave}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}

export default Carrossel;