import {Component} from 'react'
import {Grid, Container, Row, Col } from 'reactstrap';
import Link from 'next/link'

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
                                    <li><Link href="/"><a>home</a></Link></li>
                                    <li><Link href="/about"><a>about us</a></Link></li>
                                    <li><Link href="#"><a>Job Seeker<i className="fa fa-caret-down" aria-hidden="true"></i></a></Link>
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
                                    <li><Link href="#"><a>YEZ TV</a></Link></li>
                                    <li><Link href="/contact"><a >contact us</a></Link></li>
                                </ul>
                            </nav>
                            <div className="donate-box">
                                <a href="/user/login" className="donate-btn hvr-shutter-out-horizontal">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}