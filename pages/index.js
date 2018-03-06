import {Component} from 'react'
import withLayout from '../components/withLayout'
import Whatwedo from '../components/HomePage/Whatwedo'
import Steps from '../components/HomePage/Steps'
import YouthOpinion from '../components/HomePage/YouthOpinion'
import Slider from '../components/common/Header/Slider'
import ParallaxContent from '../components/HomePage/ParallaxContent' 
import ChoiceContent from '../components/ChoiceContent/ChoiceContent'
import Sector from '../components/HomePage/Sector';


class HomePage extends Component{
  render(){
    return(
      <div>
        <Slider />
        <Whatwedo />
        <Steps />
        <YouthOpinion />
        <Sector />
        <ParallaxContent />
        <ChoiceContent />
      </div>
    )
  }
}
  
export default withLayout(HomePage)