import {Component} from 'react'
import {Grid, Container, Row, Col } from 'reactstrap';

export default class Home extends Component{
    render(){
        return(
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
                                    <li><a href="/">home</a></li>
                                    <li><a href="/about">about us</a></li>
                                    <li><a href="#">Job Seeker<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="/job-seeker">Job Seeker Option</a></li>
                                            <li><a href="/job-seeker">Job Seeker Option</a></li>
                                            <li><a href="/job-seeker">Job Seeker Option</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Employers<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="/employer">Employer Option</a></li>
                                            <li><a href="#">Employer Option</a></li>
                                            <li><a href="#">Employer Option</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Job Centers<i className="fa fa-caret-down" aria-hidden="true"></i></a>
                                        <ul className="drop-menu">
                                            <li><a href="#">Job Center Option</a></li>
                                            <li><a href="#">Job Center Option</a></li>
                                            <li><a href="#">Job Center Option</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">YEZ TV</a></li>
                                    <li><a href="/contact">contact us</a></li>
                                </ul>
                            </nav>
                            <div className="donate-box">
                                <a href="#" className="donate-btn hvr-shutter-out-horizontal">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}