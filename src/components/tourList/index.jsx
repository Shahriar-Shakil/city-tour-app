import React, { Component } from 'react';
import './tourList.scss'
import Tour from '../tour/Tour'
import {tourData} from "../tourData"
class TourList extends Component {
    state = { 
        tours:tourData
     }
    removeTour= id => {
const {tours} = this.state;
const sortedTours = tours.filter((item)=>item.id !== id)
this.setState({tours:sortedTours})
    }
    render() { 
        const {tours} = this.state;
        return (  
            <section className="tourList">
               {tours.map((tour)=>{
                  return <Tour removeTour={this.removeTour}  key={tour.id} tour={tour}/>
               })}
            </section>
        );
    }
}
 
export default TourList;