import {Component} from 'react'
import {Grid, Container, Row, Col } from 'reactstrap';


export default class TopHeader extends Component{
    render(){
        return(
            <div className="top-header-area">
                <div className="container">
                    <Row>
                        <Col md='7'>
                            <div className="top-header-info">
                                <a href="#"><i className="fa fa-phone"></i>11-22-33-44-55</a><span className="seprator">|</span>
                                <a href="mailto:yez@ktt4president.org"><i className="fa fa-envelope"></i>yez@ktt4president.org</a>
                            </div>
                        </Col>
                        <Col className="col-md-5 text-right">
                            <div className="top-header-info header-right">
                                <a href="#">faq</a><span className="seprator">|</span>
                                <a href="#">contact us</a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}