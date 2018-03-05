import {Component} from 'react'
import Head from 'next/head'

import Header from './common/Header/Header'
import Scripts from './common/Scripts/Scripts'


let withLayout = (Child) => class extends Component {
    render() {
        return (
          <div>
            <Head>
              <meta name="format-detection" content="telephone=no"/>
              <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <meta charSet="utf-8"/>
              <meta name="description" content=""/>
              <meta name="keywords" content=""/>
  
  
              <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
              <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900|Raleway:300,400,500,600,700,800,900" rel="stylesheet"/>
              
              <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
              {/* font-awesome css  */}
              {/* <link rel="stylesheet" href="/static/css/font-awesome.min.css"/> */}
              {/* animate css */}
              <link rel="stylesheet" href="/static/css/animate.css"/>
              {/* owl carousel css */}
              <link rel="stylesheet" href="/static/css/owl.carousel.min.css"/>
              {/* hover css */}
              {/* <link rel="stylesheet" href="/static/css/hover.css"/> */}
              {/* hover css */}
              {/* <link rel="stylesheet" href="/static/css/lightbox.min.css"/> */}
               
              {/* slicknav css */}
              {/* <link rel="stylesheet" href="/static/css/slicknav.min.css"/> */}
              {/* main css */}
              <link rel="stylesheet" href="/static/css/main.css"/>
              {/* responsive css */}
              {/* <link rel="stylesheet" href="/static/css/responsive.css"/> */}
            </Head>
            <Header/>
            <Child {...this.props}/>
            <Scripts />
          </div>
        )
      }
    }

export default withLayout



