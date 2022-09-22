import React from 'react';
import { useState, useEffect } from 'react';




function HomePage() {
    var [years, setYears] = useState(0);
    var [days, setDays] = useState(0);
    var [hours, setHours] = useState(0);
    var [minutes, setMinutes] = useState(0);
    var [seconds, setSeconds] = useState(0);
  
    const deadline = "December, 29, 2022";
    
    if (days>365){
      days = days - 365
  
    }
    if (hours <= 9){
        hours = `0${hours}`

    }
    if (minutes <= 9){
        minutes = `0${minutes}`

    }
    if (seconds <= 9){
        seconds = `0${seconds}`

    }
    if (days<0){
        years = '00';
        days='00';
        hours='00';
        minutes='00';
        seconds='00';

    }
  
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();
      setYears(Math.floor(time / (1000 * 60 * 60 * 24*365)))
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);


    return (
        <div>
        <div id="coinkite-banner"></div>
          <section class="bcgold_maincontainer">
            <header class="show">
                <div class="landing-page">
                    <div class="main-container">
                        <div class="ui container">
                            <div class="header-mid">
                                <h1 class="ui center aligned header new-header">
                                    <span class="logo-image">
                                        <img src="./images/bitcoin-logo-orange.png" alt="Bitcoin" />
                                    </span>
                                    <span class="logo-text"><span>Bitcoin</span> halving countdown</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="landing-page">
                <div class="main-container">
                    <div class="ui container">
                        <div class="header-mid">
                            <div class="wrapper">
                                <div id="countdown-container" class="countdown-container">
                                    <div id="js-countdown" class="countdown">
                                        <div id="js-days">
                                            <div class="number">
                                                <span class="current" id="day1">0{years}</span>
                                            </div>
                                            <span class="text-dhwm">Years</span>
                                        </div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-hours">
                                            <div class="number">
                                                <span class="current" id="Hour1">{days}</span>
                                            </div>
                                            <span class="text-dhwm">Days</span>
                                        </div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-minutes">
                                            <div class="number">
                                                <span class="current" id="min1">{hours}</span>
                                            </div>
                                            <span class="text-dhwm">Hours</span>
                                        </div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-seconds">
                                            <div class="number">
                                                <span class="current" id="sec1">{minutes}</span>
                                            </div>
                                            <span class="text-dhwm">Minutes</span>
                                        </div>
                                        <div id="js-separator" class="separator">:</div>
                                        <div id="js-seconds">
                                            <div class="number">
                                                <span class="current" id="sec1">{seconds}</span>
                                            </div>
                                            <span class="text-dhwm">Seconds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="reward-cal">
                                <h4 class="reward-drop"><span class="cal_icon"><img src="./images/calendar-icon.png"
                                            alt="Bitcoin" /></span>Reward-Drop ETA
                                    date: <span class="orange-label">29 December 2023, 07:58 UTC</span>
                                </h4>
                            </div>
                            <div class="tiles-set">
                                <div class="tile-set1">
                                    <h2>840,000</h2>
                                    <p>Event Block Height</p>
                                </div>
                                <div class="tile-set1">
                                    <h2>753,675</h2>
                                    <p>Current Block Height</p>
                                </div>
                                <div class="tile-set1">
                                    <h2>474.0</h2>
                                    <p>Block Time</p>
                                </div>
                                <div class="tile-set1">
                                    <h2>USD 21656.81</h2>
                                    <p>Exchange Rate</p>
                                </div>
                                <div class="tile-set1">
                                    <h2>BTC 414.68m</h2>
                                    <p>Market Cap</p>
                                </div>
                                <div class="tile-set1">
                                    <h2>30.977 t</h2>
                                    <p>Difficulty</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </section>
           
        </div>
    );
}

export { HomePage };