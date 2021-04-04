import React, { Component}  from 'react';
import Modal from 'react-modal';
//import NodeFetch from 'node-fetch';
import OrderTable from './table';
class Orders extends Component {
    state = { 
        orders:[],
        branch:'',
        service:'',
        checkedList:[],
        modelState:false

        
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
        addList=(orderItem)=>{
          this.setState({checkedList:[...this.state.checkedList,orderItem]})
        }
        removeList=(orderItem) => {
            this.setState({checkedList:this.state.checkedList.filter(order=>{
                return order !== orderItem
            } ) })
        }
        changeState = () =>{
             if(this.state.modelState == false){
                 this.setState({modelState: true})
             }
             else{
                this.setState({modelState: false})
             }
        }
        changeToComplete = () =>{
            return this.state.orders.status == 'Completed'
        }

    
    render() { 
        let uniqueBranch= [...new Set(this.state.orders.map(order =>order.branch))];
        let uniqueService= [...new Set(this.state.orders.map(order =>order.service))];

    return(
    <div>
        <div className="tb">
           <h2>Orders</h2>
                 <div style={{display:'block'}}>
         
                <label>Filter by Branch</label> <span style={{marginLeft:10}}></span>
                <select style={{width:150}} value={this.state.branch} onChange={this.handleBranch}>
                <option  value="" selected>ALL</option>
        
                {uniqueBranch.map(un => 
                   <option  value={un} selected>{un}</option>
                   )}
                </select><span style={{marginLeft:30}}></span>
       
     
            <label > Filter by Service</label><span style={{marginLeft:10}}></span>
            <select style={{width:150 }} value={this.state.service} onChange={this.handleService}>
            <option  value="" selected>ALL</option>
        
            {uniqueService.map(us =>
            <option  value= {us} selected>{us}</option>
            )}</select> 
             
            <button 
            style={{marginLeft:500,background:'black',color:'white'}} onClick={() => this.changeState()}>
            <span style={{backgroundColor:'gray'}}>{this.state.checkedList.length}</span>
                 Mark as Complete
                 </button>

                <Modal isOpen={this.state.modelState} style={{width:20}}>
                <h4>Mark as complete</h4>
                <p>Are you sure to mark these orders as complete?</p>
                {this.state.checkedList.map(mark =>{
                
                return(
                <div style={{border:'1px solid black',margin:'20px 0px'}}>
                 <p><span style={{marginLeft:80}}></span>{mark.id}
                 <span style={{marginLeft:400}}></span>{mark.service}
                 <span style={{marginLeft:400}}></span>{mark.customer.name}
                 <br></br><span style={{marginLeft:80}}></span>{mark.branch}
                 <span style={{marginLeft:850}}></span>{mark.customer.city}
                 </p>
         </div>
                )})}
                 
        <button style={{marginLeft:850}} onClick={() => this.changeState()}>
             Cancel
         </button>
        <button style={{marginLeft:50}} onClick={() => this.changeToComplete}  >
            Marks as Complete
            
         </button>

         </Modal> 
                 
        </div>
        <br></br>
     
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
         

         {this.state.orders.map(order =><OrderTable 
         order={order} 
         branch={this.state.branch} 
         service={this.state.service}
         addList={this.addList}
         removeList={this.removeList}

          />)}
           
         
    </table>
</div>
  
 
</div> 

 
           
        );
    }
}
 
export default Orders;