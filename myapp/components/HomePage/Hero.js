import React from 'react';
import {Button} from "@nextui-org/react";


const Hero = () => {
  return (
    <section className="text-grey-700 py-16 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Join Us for the Ultimate Fitness Event
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Get ready to sweat, challenge yourself, and achieve your fitness goals!
          </p>
          <div className="flex space-x-4">
            <Button className="bg-white text-primary py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Register Now
            </Button>
            <Button className="bg-transparent border border-secondary text-secondary py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-16">
          <img
            src="https://images.pexels.com/photos/13681586/pexels-photo-13681586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fitness Event"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
