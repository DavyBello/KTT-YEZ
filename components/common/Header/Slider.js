import React, { Component } from 'react'
import Head from 'next/head'




class Slider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <section class="slider-area">
        <div cass="slider-wraper owl-carousel">
            <div class="single-slider slider-one">
                <div class="slider-table">
                    <div class="slider-table-cell">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-7 col-sm-offset-0">
                                    <div class="slider-info">
                                        <h2>donate for</h2>
                                        <h3>the poor children</h3>
                                        <p>Every day we bring hope to millions of children in the world's hardest places as a sign of God's unconditional love.
                                        </p>
                                        <a href="#" class="donate-btn hvr-shutter-out-horizontal">donate now</a>
                                        <a href="#" class="donate-btn hvr-shutter-in-horizontal">join volunteer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider slider-two">
                <div class="slider-table">
                    <div class="slider-table-cell">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-7 col-sm-offset-0">
                                    <div class="slider-info">
                                        <h2>save the children</h2>
                                        <h3>for the new world</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" class="donate-btn hvr-shutter-out-horizontal">donate now</a>
                                        <a href="#" class="donate-btn hvr-shutter-in-horizontal">join volunteer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider slider-three">
                <div class="slider-table">
                    <div class="slider-table-cell">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-7 col-sm-offset-0">
                                    <div class="slider-info">
                                        <h2>raise your helping hand</h2>
                                        <h3>for help the poor</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <a href="#" class="donate-btn hvr-shutter-out-horizontal">donate now</a>
                                        <a href="#" class="donate-btn hvr-shutter-in-horizontal">join volunteer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    )
  }
}


export default Slider;




