import React from "react";
import bgImage from "../assets/hero.png";

function Home() {
  return (
     <section
         className="relative w-full overflow-hidden bg-cover bg-center py-20 sm:py-24 md:py-32 lg:py-36 px-4 sm:px-6"
         style={{
           backgroundImage: `url(${bgImage})`,
         }}
       >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
       <div className="relative z-10 w-full px-6 sm:px-10 md:px-24 lg:px-12 -translate-y-10 md:-translate-y-16">
        
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-normal">
          TamilNadu Electrical Installation <br />
          Engineers Association <br />
          <span className="text-red-500">'A' Grade</span>
        </h1>

        <p className="text-white text-base sm:text-lg md:text-xl mt-4 md:mt-8 max-w-2xl leading-8 md:leading-15">
          Founded in 1979, Tamil Nadu Electrical Installation Engineers'
          Association was formed to serve ‘A’ Grade Electrical Contractors and
          everyone connected with the electrical fraternity.
        </p>

      </div>
        <div className="absolute inset-0">
      </div>
    </section>
  );
}

export default Home;