import {Component} from 'react'
import withLayout from '../components/withLayout'


const servicesArray = [
    {name : 'Amoos'},
    {name : 'Amoasos'},
    {name : 'Amoassos'}

]
class Services extends Component{
    static async getInitialProps ({req, query}) {
        return {query}
      }
    
    render(){
        const service = this.props.query.service     
        return(
            <div>
               {service} disay
            </div>
        )
    }
}

export default withLayout(Services)