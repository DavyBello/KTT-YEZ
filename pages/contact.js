import {Component} from 'react'
import withLayout from '../components/withLayout'
import Contact from '../components/Contact/Contact'



class ContactPage extends Component{
  render(){
    return(
      <div>
        <Contact />
      </div>
    )
  }
}
  
export default withLayout(ContactPage)