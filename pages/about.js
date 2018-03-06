import {Component} from 'react'
import withLayout from '../components/withLayout'
import About from '../components/AboutPage/About'


class AboutPage extends Component{
  render(){
    return(
      <div>
        <About />
      </div>
    )
  }
}
  
export default withLayout(AboutPage)