import React from "react";
// import Navbar from '../component/navbar'
import Button from "../component/button";
import Single from "./singleblog";
import { BsFilePdfFill } from "react-icons/bs";
// import footer from '../component/footer'
// import Footer from '../component/footer'

const About = () => {
  return (
    <div>
      {/* <Navbar/>
    <Footer/> */}
      <section class="about-us">
        <div class="about">
          {/* <img className='pic' src="https://plus.unsplash.com/premium_photo-1670328876789-2b3e51a3fd61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhbGwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'" alt="hero image" /> */}
          <div class="text">
            <h2>About Us</h2>
            <p>
              Step into a realm where words breathe life, unveiling captivating
              narratives and insightful journalism. Our publication, a beacon of
              truth and creativity, illuminates the extraordinary within the
              ordinary. With a sharp eye for detail and a passion for
              storytelling, we traverse the rich tapestry of human experiences.
              Within these pages, discover gripping interviews with
              trailblazers, heartwarming tales of resilience, and
              thought-provoking analyses of our world. From the bustling urban
              streets to untouched natural serenity, our writers share stories
              that inspire, inform, and kindle curiosity. Join us in this
              expedition through life's pages, where every tale is a masterpiece
              waiting to be told. Embrace the power of words with us,
              celebrating the beauty of the human spirit together.
            </p>
            <div class="data">
              <a href="#" className="hire">
                Download{" "}
                <i>
                  <BsFilePdfFill />
                </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Button />
    </div>
  );
};

export default About;
