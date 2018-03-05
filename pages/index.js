import {Component} from 'react'
import withLayout from '../components/withLayout'
import Jumbo from '../components/common/Header/Jumbo'
import Slider from '../components/common/Header/Slider'


class Index extends Component{
  render(){
    return(
      <div>
        <Jumbo />
        <Slider />
      </div>
    )
  }
}
  
export default withLayout(Index)