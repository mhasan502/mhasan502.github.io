import {Link} from "react-router-dom";
import {Carousel, CarouselSlide} from "@mantine/carousel";
import Skeleton from "./Skeleton.jsx";
import Index from "../pages/Index.jsx";
import Experience from "../pages/Experience.jsx";
import Education from "../pages/Education.jsx";
import Projects from "../pages/Projects.jsx";
import Skills from "../pages/Skills.jsx";
import Publications from "../pages/Publications.jsx";

const Carouselify = () => {
  return (
    <Skeleton>
      <Carousel slideSize="100%" height={"auto"} align="start" slideGap="xl" withControls
                draggable={false} withIndicators>
        <CarouselSlide><Index/></CarouselSlide>
        <CarouselSlide><Experience/></CarouselSlide>
        <CarouselSlide><Education/></CarouselSlide>
        <CarouselSlide><Projects/></CarouselSlide>
        <CarouselSlide><Skills/></CarouselSlide>
        <CarouselSlide><Publications/></CarouselSlide>
      </Carousel>
    </Skeleton>
  );
}

export default Carouselify;