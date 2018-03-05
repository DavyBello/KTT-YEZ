import {Component} from 'react'
import {Grid, Container, Row, Col } from 'reactstrap';


export default class Header extends Component{
    render(){
        return(
            <header className="header-area">
                {/* <!-- top header area --> */}
                <div className="top-header-area">
                    <div className="container">
                        <Row>
                            <Col md='7'>
                                {/* <!-- header contact --> */}
                                <div className="top-header-info">
                                    <a href="#"><i className="fa fa-phone"></i>11-22-33-44-55</a><span className="seprator">|</span>
                                    <a href="mailto:yez@ktt4president.org"><i className="fa fa-envelope"></i>yez@ktt4president.org</a>
                                </div>
                            </Col>
                            <Col className="col-md-5 text-right">
                                {/* <!-- header support --> */}
                                <div className="top-header-info header-right">
                                    <a href="#">faq</a><span className="seprator">|</span>
                                    <a href="#">contact us</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* <!-- menu area --> */}
                <div className="menu-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                           
                            <div className="kttyez-logo">
                                <a href="#"><img src="/static/img/yezlogo.png" alt=""/></a>
                            </div>
                            <div className="responsive-menu-wrap"></div>
                        </div>
                        <div className="col-md-10">
                            <nav className="main-menu">
                                <ul className="navigation">
                                    <li><a href="index-2.html" className="menu-active">home</a></li>
                                    <li><a href="about.html">about us</a></li>
                                    <li><a href="#">causes<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="causes-no-sidebar.html">causes no-Sidebar</a></li>
                                            <li><a href="causes-left-sidebar.html">causes left</a></li>
                                            <li><a href="causes-right-sidebar.html">causes right</a></li>
                                            <li><a href="causes-details-left.html">single causes left</a></li>
                                            <li><a href="causes-details-right.html">single causes right</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">gallery<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="gallery-one.html">gallery style one</a></li>
                                            <li><a href="gallery-two.html">gallery style two</a></li>
                                            <li><a href="gallery-three.html">gallery style three</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">volunteers<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="volunteers-3col.html">volunteers 3col</a></li>
                                            <li><a href="volunteers-4col.html">volunteers 4col</a></li>
                                            <li><a href="volunteers-details.html">single volunteers</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">events<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="events-3col.html">events 3col</a></li>
                                            <li><a href="events-4col.html">events 4col</a></li>
                                            <li><a href="events-details.html">single events</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">blog<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="blog-no-sidebar.html">blog no-Sidebar</a></li>
                                            <li><a href="blog-left-sidebar.html">blog left</a></li>
                                            <li><a href="blog-right-sidebar.html">blog right</a></li>
                                            <li><a href="blog-details-left-sidebar.html">single blog left</a></li>
                                            <li><a href="blog-details-right-sidebar.html">single blog right</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact us</a></li>
                                </ul>
                            </nav>
                            <div className="donate-box">
                                <a href="#" className="donate-btn hvr-shutter-out-horizontal">donate</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </header>
        )
    }
}