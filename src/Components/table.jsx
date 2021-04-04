import React, { Component } from 'react';
class OrderTable extends Component {
    state = { 
        order:this.props.order, 
        checked:true
        
    }
    handleCheckBox = (e)=>{
        
       if(this.state.checked){
            
           this.setState({checked: false})
           this.props.addList(this.state.order)

       }
       else{
        this.setState({checked: true}) 
        this.props.removeList(this.state.order)

        
       }
         

    }

    display=()=>{
        if ((this.props.branch  == this.state.order.branch  || this.props.branch == '') && (this.props.service  == this.state.order.service  || this.props.service == ''))
        {
             
            return(
        
        <tr className={this.state.order.status == 'Completed' ? 'changeColor' : ''}>
            <td><input   type={"checkbox"}  onChange={this.handleCheckBox}/></td>

           <td>{this.state.order.id}</td>
            
           <td>{this.state.order.customer.name}<br></br>{this.state.order.customer.city}</td>
           <td> {this.state.order.addedby}</td>
           <td>{this.state.order.reference}</td>
           <td> 
           {this.state.order.branch}</td>
           <td>  
           {this.state.order.service}</td>

         
          <td>{this.state.order.status}</td>
          </tr>
            );
                
           
           }
           }

           

          
        

    
    render(){ 
        return(
           <React.Fragment>{this.display()}</React.Fragment>

           
       );

        }      
        
}
 
export default OrderTable;