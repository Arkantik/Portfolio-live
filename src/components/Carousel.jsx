// Package
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";

// Style
import "swiper/swiper-bundle.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

export default function Carousel({ projects }) {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        initialSlide={1}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 125,
          modifier: 1.5,
        }}
        pagination={{ el: ".pagination", clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <img
              src={project.img}
              alt={project.name}
              className="h-2/5 w-full rounded-t-2xl object-cover object-top md:h-3/5 md:w-full md:object-cover"
            />
            <article className="flex flex-col gap-4 px-2 md:gap-2">
              <div className="flex flex-wrap justify-center md:flex-nowrap">
                {project.techno_images.map((imgSrc) => (
                  <img
                    key={imgSrc}
                    src={imgSrc}
                    alt="Technology"
                    className="inline-flex p-2"
                  />
                ))}
                <img
                  src={project.tool}
                  alt={project.tool}
                  className="p-2 md:inline-flex"
                />
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-primary bg-transparent px-4 py-1 text-light hover:bg-primary"
                >
                  Github
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-primary bg-transparent px-4 py-1 text-light hover:bg-primary"
                >
                  Website
                </a>
              </div>
              <p className="text-center text-xs text-light md:text-sm">
                {project.description}
              </p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-controller flex items-center justify-center">
        <div className="flex items-center gap-4">
          <button type="button" className="button-prev">
            <img
              src="../assets/icons/portfolio/arrow-left-circle.svg"
              alt="Previous Slide"
              className="h-10 w-10"
            />
          </button>
          <div className="pagination flex items-center justify-around gap-1" />
          <button type="button" className="button-next">
            <img
              src="../assets/icons/portfolio/arrow-right-circle.svg"
              alt="Next Slide"
              className="h-10 w-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      img: PropTypes.string,
      github: PropTypes.string,
      website: PropTypes.string,
    })
  ),
};

Carousel.defaultProps = {
  projects: null,
};
