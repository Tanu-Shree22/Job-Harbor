import React, { useState, useEffect } from 'react';
import './css/Home.css';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsBuildingsFill } from 'react-icons/bs'
import { IoIosSearch } from "react-icons/io";
import { GrCurrency } from "react-icons/gr";
import { card } from '../assets/Cardsdata.json';
import { slides } from '../assets/Carouseldata.json';
import { feat } from '../assets/Featuredata.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Layout from './Layout';
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


function Carousel() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  )

}
function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  
      const {searchdata,setsearchdata}= useState([])
      const API='http://localhost:3000/user/search/'
  // async function  searchhandle (event){
  //  let key=event.target.value;
  //  console.log(key)
  //  const respose=axios({
  //   method: 'post',
  //   url: API+key,
  //   withCredentials: true,
  //   data: data}).then(res => { setsearchdata(res)})
  // }



  return (
    <Layout>
      <div className='container' >
        <div className='group-container'>
          <Carousel />
          <div className="search-overlay">
            <h2 className="search- headline">Find your dream job</h2>
            <p className="search-text">Search thousands of jobs with one simple search</p>
            {/* <div className='search'> */}
            <form className="Search-form">
              <IoIosSearch className='search-icon' />
              <button className="Search-btn " type="submit">Search</button>
              <input className="input-Search"  type="search" placeholder="Job title, company" aria-label="Search" />
            </form>
            {/* </div> */}
          </div>
          <div className="emp-typ flt-grp">
            <h3 className="hom-heading">Employment type</h3>

            <div className="btn-group col-xs-12">
              <div className="select">
                <input type="checkbox" id="item_1" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_1">Internship</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_2" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_2">Full Time</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_3" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_3">Part Time</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_4" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_4">Freelance</label>
              </div>
            </div>

          </div>
          <div className="work-sec flt-grp">
            <h3 className="hom-heading">Remote work</h3>
            <div className="btn-group col-xs-12">
              <div className="select">
                <input type="checkbox" id="item_5" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_5">On-site</label>
              </div>
              <div className="select">
                <input type="checkbox" id="item_6" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_6">On-site or Remote</label>
              </div>
            </div>
          </div>
          <div className="com-perks flt-grp">
            <h3 className="hom-heading">Company perks</h3>


            <div className="btn-group col-xs-12 ">
              <div className="select">
                <input type="checkbox" id="item_7" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_7">Health Insurance</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_8" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_8">Retirement Plan</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_9" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_9">Flexible Hours</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_10" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_10">Paid Time Off</label>
              </div>
              <div className="select">
                <input type="checkbox" id="item_11" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_11">Professional Development</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_12" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_12">Remote Work</label>
              </div>

              <div className="select">
                <input type="checkbox" id="item_13" />
                <label className="btn btn-warning button_select label-btn" htmlFor="item_13">Wellness Programs</label>
              </div>
            </div>
          </div>
          <button className='filter-btn hbtn flt-grp'>Apply filters</button>

        </div>
        <div className="group-container">

          <div className="headline"><h3 className="headline">Featured Jobs</h3></div>
          <div className="feat-job">
            <div className="feat-cont">
              <Slider {...settings}>
                {feat.map((d, idx) => (
                  <div className='card-profile' key={idx}>
                    <div className='feat-cont-img'>
                      <img className='feat-img' src={d.src} key={idx} alt={d.alt} />
                    </div>
                    <div className='profile-card-text'>
                      <dl className='profile-card-text'>
                        <dt>{d.post}</dt>
                        <dd>{d.company}</dd>
                      </dl>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="wjh"><h1 className="why-headline headline">Why Job Harbor?</h1><p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos impedit unde suscipit esse est? Incidunt omnis dolorum, fuga eveniet perferendis quas dolores nam iure hic perspiciatis sunt quia deserunt facere labore commodi cum temporibus porro distinctio veniam quam itaque maiores. Eos, perferendis id.</p>
            <button id='learn'>Learn More</button>
            <div className="cards-box">
              <div className="card">
                <span><IoIosSearch className="feat-icon" /></span>
                <dl>
                  <dt>AI-powered job search</dt>
                  <dd>Get instant job matches and recommendations</dd>
                </dl>
              </div>
              <div className="card">
                <span><GrCurrency className="feat-icon" /></span>
                <dl>
                  <dt>Salary estimate</dt>
                  <dd>Know where you stand in the  job market</dd>
                </dl>
              </div>
              <div className="card">
                <span><BsBuildingsFill className="feat-icon" /></span>
                <dl>
                  <dt>Company insights</dt>
                  <dd>Read reviews from real employees</dd>
                </dl>
              </div>
              <div className="card">
                <span><MdOutlineDocumentScanner className="feat-icon" /></span>
                <dl>
                  <dt>Resume recommendations</dt>
                  <dd>Improve your resume before you apply</dd>
                </dl>
              </div>
            </div>
          </div>
          < div className="Te-monials-container">
            <h3 className="headline">Testimonials</h3>
            <div className="Te-monials-cards">
              <Slider {...settings}>
                {card.map((d, idx) => (
                  <div className='card-profile' key={idx} >
                    <div className='tesmon-img-cont'>
                      <img className='tes-mon-img' src={d.src} key={idx} alt={d.alt} />
                    </div>
                    <div className='profile-card-text'>
                      <dl className='profile-card-text'>
                        <dt>{d.name}</dt>
                        <dd >{d.review}</dd>
                      </dl>

                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Home
