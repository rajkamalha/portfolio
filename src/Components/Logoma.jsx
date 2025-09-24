import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/tejas.png";
import logo3 from "../assets/fishman.png";
import logo4 from "../assets/grow.svg";
import logo5 from "../assets/v_logo.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const LogoMarquee = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#62c6e2]">
          My Works
        </h2>

        <div className="overflow-hidden relative w-full">
          <div className="marquee flex w-max">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-none px-8">
                <img
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .marquee {
          display: flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;
