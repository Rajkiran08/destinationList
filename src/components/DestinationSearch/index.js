import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
    state = {searchInput: "",}
    onChangeSearchInput = (event) =>{
        this.setSate({searchInput: event.target.value})
    }

    render() {

        const {searchInput} = this.state 
        const {destinationsList} = this.props
        const searchResult = destinationsList.filter(eachItem => 
        eachItem.name.toLowerCase().includes(searchInput.toLowerCase())
        )

        return(

        <div className= "bg-container">
            <div>
                <h1 className = "heading">Destination Search</h1>
                <div className="search-bar">
                    <input type="search" placeholder="search" className="search-bar" onChange= {this.onChangeSearchInput}/>
                    <img src= "https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className= "img-icon"/>
                </div>
                <ul>
                    {searchResult.map((eachItem)=> (
                    <DestinationItem 
                    key = {eachItem.id}
                    destinationDetails = {eachItem}
                    />
                    ))}
                </ul>
            </div>
        </div>
    )
}
}

 export default DestinationSearch
 