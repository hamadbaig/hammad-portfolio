"use client";

import React from "react";

import Navbar from "../Components/Section/Navbar/Navbar";
import Worksection from "../Components/Section/Worksection/Worksection";

const Work = () => {
  return (
    <>
      <Navbar />
      <Worksection
        title=" 2MGAB | Master Barber"
        description="A barber website built using JavaScript, HTML, and CSS showcases a sleek and responsive design featuring services, pricing, booking functionality, and a gallery of styles. JavaScript enhances interactivity with dynamic content such as booking forms and image sliders. "
        web="https://2mgab.com/"
        img="/barberweb.png"
      />
      <Worksection
        title=" Fnp"
        description="Fnp is an e-commerce gift store live in UAE using Next.js and Node.js involves developing a fast, server-side rendered React application for the frontend with Next.js, and implementing a robust backend with Node.js to handle API requests, authentication, and database interactions. This setup ensures optimal performance, SEO-friendly pages, and seamless integration of essential e-commerce functionalities like product listings, user authentication, and payment processing. Utilizing Next.js's static site generation and server-side rendering capabilities enhances the overall user experience and scalability of the store. "
        web="https://www.fnp.ae/"
        img="/fnp.png"
        workclass="work-main2"

      />
      <Worksection
        title="Elysium Sols"
        description="A dynamic business website, crafted with JavaScript, Next.js, and Tailwind CSS, showcases an engaging design with smooth animations. Featuring a comprehensive portfolio, a dedicated team section, and client testimonials, it highlights the company's expertise and credibility."
        web="#"
        img="/elysium.png"
      />
      <Worksection
        title="Nick Roffies"
        description="Project Statement: Nick Roffeis is from Austria and advertising design student in Berlin.Overview: This website is developed with HTML5, CSS3 and for animations I have used JQuery."
        web="https://sleepy-curie-1851c9.netlify.app/"
        img="/NickRoffeis.png"
        workclass="work-main2"

      />
      <Worksection
        title="Bodega"
        description="Bodega is a simple html, css and javascript store,  This setup ensures optimal performance, SEO-friendly pages, and seamless integration of essential e-commerce functionalities like product listings, user authentication, and payment processing. Utilizing Next.js's static site generation and server-side rendering capabilities enhances the overall user experience and scalability of the store.  . "
        web="#"
        img="/bodega.png"
      />
      <Worksection
        title=" 127 Sports Intensity"
        description=" 127 Sport Intensity: A dynamic website built with HTML, CSS, and JavaScript, showcasing local sports events. Users can participate in events and book tickets to watch, ensuring an engaging and interactive experience. "
        web="#"
        img="/127sportsintensity.png"
        workclass="work-main2"

      />
    </>
  );
};
export default Work;
