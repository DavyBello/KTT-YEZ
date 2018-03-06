//import { Grid, Row, Col} from 'react-bootstrap'

const About = (props) => {
    return (
        <div>
            <section className="page-title-area parallax">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                            <div className="page-title">
                                <div className="title">
                                    <h2>About YEZ</h2>
                                </div>
                                <ul className="breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li>YEZ</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="causes-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="causes-left">
                                
                                <div className="causes-info">
                                    <div className="causes-img">
                                        <img src="/static/img/about/about.png" alt=""/>
                                        <div className="project-count-info">
                                            <span className="counter" data-count="350">0</span> <span>+</span>
                                        </div>
                                    </div>
                                    <div className="causes-details">
                                        <h2><a href="#">Segment Title</a></h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut eum perspiciatis?</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? Libero saepe perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupiditate. Repudiandae provident, consectetur, sapiente, libero iure necessitatibus.</p>
                                        <div className="condition-donate causes">
                                            <a href="#" className="donate-btn more-btn hvr-shutter-out-horizontal">donate now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="related-causes">
                                <h2>related causes</h2>
                                
                                <div className="related-causes-info">
                                    <div className="related-causus-img">
                                        <img src="img/gallery/02.jpg" alt=""/>
                                    </div>
                                    <div className="related-causus-details">
                                        <h2>Segment Title</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quas, quidem totam, fuga iste et voluptatem tempora molestiae ipsa. Similique voluptates mollitia.</p>
                                        <a href="#" className="donate-btn hvr-shutter-out-horizontal">read more</a>
                                    </div>
                                </div>
                                
                                <div className="related-causes-info">
                                    <div className="related-causus-img">
                                        <img src="img/gallery/03.jpg" alt=""/>
                                    </div>
                                    <div className="related-causus-details">
                                        <h2>Gear up for giving</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quas, quidem totam, fuga iste et voluptatem tempora molestiae ipsa. Similique voluptates mollitia.</p>
                                        <a href="#" className="donate-btn hvr-shutter-out-horizontal">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            
                            <div className="sidebar-widget">
                                <div className="widget-title">
                                    <h2>Services</h2>
                                </div>
                                <ul>
                                    <li><a href="#">Career Advice</a></li>
                                    <li><a href="#">Internship</a></li>
                                    <li><a href="#">Training</a></li>
                                    <li><a href="#">Entrepreneurship</a></li>
                                    <li><a href="#">Community Action</a></li>
                                    <li><a href="#">Employment</a></li>
                                    <li><a href="#">Scholarship</a></li>
                                    <li><a href="#">Competitions</a></li>
                                    <li><a href="#">Seminars</a></li>
                                </ul>
                            </div>
                            
                            <div className="sidebar-widget">
                                <div className="widget-title">
                                    <h2>Sector / Industry</h2>
                                </div>
                                <ul>
                                    <li className="category-active"><a href="#">Sat : 08:00am-12:00pm</a></li>
                                    <li><a href="#">sun : 08:00am-12:00pm</a></li>
                                    <li><a href="#">mon : 08:00am-12:00pm</a></li>
                                    <li><a href="#">twe : 08:00am-12:00pm</a></li>
                                    <li><a href="#">wed : 08:00am-12:00pm</a></li>
                                    <li><a href="#">thu : 08:00am-12:00pm</a></li>
                                    <li><a href="#">fri : 08:00am-12:00pm</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="call-to-main">
                                <h2>We care for children, protect their welfare, and prepare them for the future.</h2>
                            </div>
                        </div>
                        <div className="col-md-3 text-right">
                            <div className="donate-call">
                                <a href="#" className="donate-btn more-btn hvr-shutter-out-horizontal"><i className="fa fa-send"></i>donate now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
  export default About