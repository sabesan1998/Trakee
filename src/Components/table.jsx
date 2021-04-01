import React, { Component } from 'react';
class OrderTable extends Component {
    state = { order:this.props.order }

    display=()=>{
        if (this.props.branch === this.state.branch || this.props.branch === '')
        {
            return <tr>
            <td><input value={this.state.order.id} type={"checkbox"}/></td>

           <td>{this.state.order.id}</td>
            
           <td>{this.state.order.customer.name}<br></br>{this.state.order.customer.city}
           </td>
           <td>{this.state.order.addedby}</td>
           <td>{this.state.order.reference}</td>
           <td>{this.state.order.branch}</td>
           <td>{this.state.order.service}</td>
           <td>{this.state.order.status}</td>

           </tr>
        }

    }
    render() { 
        return(
           <React.Fragment>{this.display()}</React.Fragment>

           
       );

        }      
        
}
 
export default OrderTable;