import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import LandingPage from "../../pages/LandingPage/LandingPage";
import EventPage from "../..//pages/EventPage/EventPage";
import ConfirmedOrdersPage from "../../pages/ConfirmedOrdersPage/ConfirmedOrdersPage";

function MainSwiper( { initialSlide = 0 } ) {
  return (
    <section className="wrapper">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        initialSlide={initialSlide}
      >
        <SwiperSlide><LandingPage /></SwiperSlide>
        <SwiperSlide><EventPage /></SwiperSlide>
        <SwiperSlide><ConfirmedOrdersPage /></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default MainSwiper;
