import React, { Component } from 'react';
//import NodeFetch from 'node-fetch';
import OrderTable from './table';
class Orders extends Component {
    state = { 
        orders:[],
        branch:'',
        service:''

        
     }
    async componentDidMount(){
        /*NodeFetch('https://my-json-server.typicode.com/dsrishi/orders/orders')
        .then(res => {
          this.setState({ orders:res.data.orders });*/
          const url = 'https://my-json-server.typicode.com/dsrishi/orders/orders';

          const response =await fetch(url);
          const data =await response.json();
          console.log(data);
          this.setState({orders:[...data]})
        } 
        handleBranch = (e)=>{
            this.setState({branch: e.target.value});
        }  
        handleService =(e)=>{
            this.setState({service: e.target.value});

        }

    
    render() { 
        return(
            <div>
              
              <div className="tb">
     <h2>Orders</h2>
     <div>
     <span><label>Filter by Branch</label><br></br>
        <select value={this.state.branch} onChange={this.handleBranch}>
        <option  value="" selected>ALL</option>
        
        {this.state.orders.map(order =>
            <option  value={order.branch} selected>{order.branch}</option>
            )}
        </select><br></br>
        <br></br>
        <label>Filter by Service</label><br></br>
        <select value={this.state.service} onChange={this.handleService}><option  value="" selected>ALL</option>
        
        {this.state.orders.map(order =>
            <option  value= {order.service} selected>{order.service}</option>
            )}</select></span>
    </div>
    <br></br>
    <div>
        <button>Mark as complete</button>
    </div>
    <table className={'w3-table w3-bordered'} border={'1px'}>
         <tr>
             <th></th>
             <th>Order ID</th>
             <th>Customer</th>
             <th>Added_By</th>
             <th>Reference</th>
             <th>Branch</th>
             <th>Service</th>
             <th>Status</th>
         </tr>
         

         {this.state.orders.map(order =><OrderTable order={order} branch={this.state.branch} />)}
         
    </table>
</div>


            </div>
        );
    }
}
 
export default Orders;