import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name, id} = destinationDetails

    return(
      <li className="bg-img">
        <img src = {imgUrl} alt={name} className= "image"/>
        <p className= "para">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
