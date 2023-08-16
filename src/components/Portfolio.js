import React from 'react';

function Portfolio() {
  return (
    <>
      <section className="text-white">
        <div className="border border-white rounded-lg">

          <h2 className="text-3xl p-4 font-semibold mb-4">The Collection...</h2>
          <div className="mb-4">
            <a href="https://jamilbarrett.github.io/work_daze/" target="_blank" rel="noopener noreferrer">

              <div className="image-container">
                <img
                  src="wkday.png"
                  alt="workday"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="image-title">Work Day Scheduler</div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-4">
        <div className="border border-white rounded-lg">
          <a href="https://moodsync-calendar-1a40e0647873.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img
                src="Moodsync.png"
                alt="Project 2"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="image-title">Moodsync Calendar</div>
            </div>
          </a>
        </div>
        <div className="border border-white rounded-lg">
          <a href="https://jamilbarrett.github.io/weather-flix-project/" target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img
                src="WeatherFlix.png"
                alt="WeatherFlix"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="image-title">WeatherFlix</div>
            </div>
          </a>
        </div>
        <div className="border border-white rounded-lg">
          <a href="https://github.com/jamilbarrett/ecomm_backend" target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img
                src="ecommback.png"
                alt="Ecommback"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="image-title">Ecomm Backend</div>
            </div>
          </a>
        </div>
        <div className="border border-white rounded-lg">
          <a href="https://jamilbarrett.github.io/words_will_pass/d" target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img
                src="passgen.png"
                alt="password generator"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="image-title">Password Generator</div>
            </div>
          </a>
        </div><div className="border border-white rounded-lg">
          <a href="https://github.com/jamilbarrett/digi_weather" target="_blank" rel="noopener noreferrer">
            <div className="image-container">
              <img
                src="digiw.png"
                alt="weather"
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="image-title">Digiweather</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
