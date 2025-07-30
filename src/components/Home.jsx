import React from "react";
import { Carousel, Thumbs } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required styles
import { Medal, ThumbsUp, Users,MapPin, Clock, Phone, Mail  } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Caraousel Section */}
      <div className="top-0 relative w-full ">
        <Carousel
          autoPlay
          interval={2000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          dynamicHeight={false}
        >
          <div>
            <img
              src="/newimages/res1.jpg"
              alt="res1"
              className="w-full h-[350px] md:h-[700px] "
            />
          </div>
          <div>
            <img
              src="/newimages/res3.jpg"
              alt="res3"
              className="w-full h-[350px] md:h-[700px]"
            />
          </div>
          <div>
            <img
              src="/newimages/c5.jpg"
              alt="c5"
              className="w-full h-[350px] md:h-[700px]"
            />
          </div>
        </Carousel>
        <div className="absolute w-full bg-blend-soft-light p-8 z-10 inset-0 flex flex-col justify-center items-center text-amber-50 bg-black/50 ">
          <h2 className="text-[20px] md:text-4xl font-bold text-center mt-8">
            Welcome to Our Restaurant
          </h2>
          <p className="text-center text-[15px] md:text-2xl mt-4">
            Experience the best dining with us.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div id="about" className=" flex flex-col md:flex-row justify-center items-center gap-4 p-4 pl-4 md:pl-52 md:pr-52 md:p-8">
        <div>
            <img src="/newimages/daras.jpg" alt="" className="w-[1800px] h-[350px] md:h-[700px] rounded-bl-4xl md:rounded-2xl shadow-2xl" />
        </div>
        <div className="gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-center mt-8">    
              Our Story
            </h2>
          </div>
          <div>
            <p className="text-center text-lg md:text-xl mt-4">
              Discover the journey of our restaurant and the passion behind our
              dishes.
            </p>
          </div>
          <div>
            <p className="text-center md:text-lg mt-4">
              Our chef brings over 20 years of culinary expertise, crafting
              dishes that blend traditional techniques with modern innovation.
              We source the finest ingredients from local farmers and producers,
              ensuring freshness and supporting our community.
            </p>
          </div>
          <div className="flex flex-row pr-2 gap-4 md:gap-12 justify-center items-center m-[28px] w-full">
          <div className="text-2xl flex flex-col md:text-center md:m-1"><Medal className="h-10 w-10"/>Award Winning</div>
          <div className="text-2xl flex flex-col md:text-center md:m-1"><ThumbsUp className="h-10 w-10"/>Quality Food</div>
          <div className="text-2xl flex flex-col md:text-center md:m-1"><Users className="h-10 w-10"/>Expert Chef</div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col items-center justify-center gap-4">
        
        <h2 className="text-2xl md:text-4xl font-bold text-center mt-8">Gallery</h2>
        <div className="flex flex-col md:flex-row m-2 items-center justify-center gap-4">
              <img className=" h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/daras2-min.jpg" alt="" />
               <img className="h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/gallery1-min.jpg" alt="" />
              <img className=" h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/daras4-min.jpg" alt="" />
        </div>
        <div className="flex flex-col md:flex-row m-2 items-center justify-center gap-4">
               <img className="h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/gallery2-min.jpg" alt="" />
              <img className=" h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/daras3-min.jpg" alt="" />
               <img className="h-[350px] md:h-[630px] w-[450px] rounded-bl-4xl md:rounded-2xl shadow-2xl" src="/newimages/gallery3-min.jpg" alt="" />
        </div>
      </div>

      {/* Contact Us */}
      <div className="flex flex-col p-4 md:flex-row items-center bg-gray-200">
        <div className="flex flex-col justify-center gap-4 md:ml-10">
          {/* contact us details */}
          <h2 className="text-2xl md:text-4xl font-bold text-center mt-8">Contact Us</h2>
          <p className="text-lg md:text-xl ">We'd love to hear from you. Feel free to get in touch with any questions, feedback, or inquiries.</p>
        
        <div className="flex flex-row text-lg gap-2 items-center">
          <div><MapPin className="h-10 w-10 text-blue-500"/></div>
          <div className="flex flex-col">
            <h2>Location</h2>
            <p>OLD CITY,BEHIND JAGDISH MANDIR,UDAIPUR</p>
          </div>
        </div>

        <div className="flex flex-row text-lg gap-2 items-center">
          <div><Clock className="h-10 w-10 text-blue-500" /></div>
          <div className="flex flex-col">
            <h2>Hours</h2>
            <p>Monday - Friday: 5:00 PM - 10:00 PM</p>
            <p>Saturday - Sunday: 4:00 PM - 11:00 PM</p>
          </div>
        </div>

        <div className="flex flex-row text-lg gap-2 items-center">
          <div><Phone className="h-10 w-10 text-blue-500" /></div>
          <div className="flex flex-col">
            <h2>Phone</h2>
            <p>+91 12345 67890</p>
          </div>
        </div>

        <div className="flex flex-row text-lg gap-2 items-center">
          <div><Mail className="h-10 w-10 text-blue-500" /></div>
          <div className="flex flex-col">
            <h2>Email</h2>
            <p>info@restaurant.com</p>
          </div>
        </div>
        </div>

        <div id="contact" className="flex flex-col items-center justify-center mt-10 gap-4 md:w-5xl md:pl-52 md:pr-52 md:p-8">
          {/* contact form */}
          <form action="" method="post" className="flex flex-col gap-4 w-full max-w-md">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required className="border border-gray-300 p-2 rounded" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required className="border border-gray-300 p-2 rounded" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Your Message" required className="border border-gray-300 p-2 rounded"></textarea>

            <button type="submit" className="bg-orange-700 h-10 text-white rounded">Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
