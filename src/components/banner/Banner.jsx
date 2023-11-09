import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
const Banner = () => {
    useEffect(()=>{

        Aos.init({duration: 2000});


    },[])
    return (
        <div>
 <div className="carousel h-screen w-full">
  <div id="slide1" className="carousel-item  relative h-screen w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
 

  <div className="hero-overlay bg-opacity-40"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Where Food Meets Passion classico italiano
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Local Ingredients, Global Flavors Showcasing a commitment to fresh, locally sourced ingredients </p>
    </div>
      <Link to={'/allfood'}><button className="btn btn-primary rounded-md bg-orange-600  text-white">shop now</button></Link>
    </div>
  </div>
</div>

    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
      <a href="#slide4" className="btn btn-circle">❮</a> 
 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 





  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(  https://images.unsplash.com/photo-1662982693758-f69fcb81e7d2?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Unforgettable Flavors, Unparalleled Atmosphere.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Tantalize Your Palate Highlighting the sensory experience of the food</p>
    </div>
      <Link to={'/allfood'}><button className="btn btn-primary">shop now</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 








  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(  https://plus.unsplash.com/premium_photo-1661470225464-735636d873f1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">Indulge in Culinary Delights at classico italiano.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem </p>
    </div>
      <Link to={'/allfood'}><button className="btn btn-primary">shop now</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 






  <div id="slide4" className="carousel-item relative w-full">
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1625944527261-06c90f1901e3?auto=format&fit=crop&q=80&w=1480&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
<div data-aos="fade-right">
<h1 className="mb-5 text-6xl font-bold">A Culinary Journey Awaits.
</h1>
</div>
    <div data-aos="fade-left">
    <p className="mb-5 text-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem </p>
    </div>
      <Link to={'/allfood'}><button className="btn btn-primary">shop now</button></Link>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>




  
</div>
 

        </div>
    );
};

export default Banner;