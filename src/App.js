import React from 'react'
import "./App.css"

class App extends React.Component {
  constructor(props){ 
    super(props) 
    this.state = { email:'',name:'', lastname:''} 
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
  } 

  handleSubmit(event){ 
    const { email, name, lastname } = this.state 
    event.preventDefault() 
    alert(` 
      ____Your Details____\n 
      Name : ${name} 
      Lastname: ${lastname}
      Email : ${email} 
    `) 
  } 

  handleChange(event){ 
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  } 


  render() {
    return (
    <>
    
    <div className="wrapper wrapper_left">
      <hr className="line"></hr>&nbsp;
      <div className="subscribe_text">
      <h1>Subscribe now and get a <strong>free</strong> t-shirt directly in your inbox.</h1>
      </div>
      </div>
      <div className="wrapper wrapper_right">
     
      <div className="radio_buttons">
         <input className="radio_btn" type="radio" id="radio1" name="radios" required></input>
         <label htmlFor="radio1"> Male&nbsp;&nbsp;</label>
         <input className="radio_btn" type="radio" id="radio2" name="radios" required></input>
         <label htmlFor="radio1"> Female&nbsp;&nbsp;</label>
         <input className="radio_btn" type="radio" id="radio3" name="radios" required></input>
         <label htmlFor="radio1"> Other&nbsp;&nbsp;</label>
      </div>
      <form onSubmit={this.handleSubmit}>
      <div>
         <label >
           <p>Name</p>
           <input type="text" value = {this.state.name} onChange={this.handleChange}
           className="input_box" name="name" placeholder="Your Name" required/>
         </label>
         <label >
           <p>Lastname</p>
           <input type="text" value = {this.state.lastname} onChange={this.handleChange}
           className="input_box" name="lastname" placeholder="Your Lastname" required/>
         </label>
         <label > 
           <p>Email</p>
           <input type="text" value = {this.state.email} onChange={this.handleChange} 
           className="input_box" type="email" name="email" id="email" placeholder="Please enter your email" required>
           </input>
         </label>
         <div className="checkbox">
         <input type="checkbox" id="check" name="check1" required></input>
         <label htmlFor="check"> I agree with the privacy policies</label>
           </div>
           <div className="btn"><button type="submit" /*value={this.state.value}*/>Subscribe</button></div>     
       </div>
       
     </form>
    </div>
   
</>
    )
}
}


export default App;
