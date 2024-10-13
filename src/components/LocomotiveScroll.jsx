import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Skeleton from './Skeleton.jsx';
import Index from '../pages/Index.jsx';
import Experience from '../pages/Experience.jsx';
import Education from '../pages/Education.jsx';
import Skills from '../pages/Skills.jsx';
import Publications from '../pages/Publications.jsx';


const Scrollify = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    scroll.on('call', (func, way, obj) => {
      if (func === 'animate' && way === 'enter') {
        obj.el.classList.add('is-inview');
      }
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <Skeleton>
      <div data-scroll-container ref={scrollRef} className={'scroll-container'}>
        <section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'} style={{marginBottom: '10vh'}}>
          <Index/>
        </section>
        <section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'}>
          <Experience/>
        </section>
        {/*<section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'}>*/}
        {/*  <Projects/>*/}
        {/*</section>*/}
        <section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'}>
          <Publications/>
        </section>
        <section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'} style={{minHeight: '30vh'}}>
          <Skills/>
        </section>
        <section className={'scroll-section'} data-scroll-section data-scroll data-scroll-call={'animate'} style={{minHeight: '30vh', marginBottom: '20vh'}}>
          <Education/>
        </section>
      </div>
    </Skeleton>
  );
};

export default Scrollify;
