import "./App.css"

function App() {
  return (
    <>
    
    <div className="wrapper wrapper_left">
      <hr className="line"></hr>&nbsp;
      <div className="subscribe_text">
      <h1>Subscribe now and get a <strong>free</strong> t-shirt directly in your inbox.</h1>
      </div>
      </div>
      <div className="wrapper wrapper_right">
      <form>
      <div className="radio_buttons">
         <input className="radio_btn" type="radio" id="radio1" name="radios" required></input>
         <label for="radio1"> Male&nbsp;&nbsp;</label>
         <input className="radio_btn" type="radio" id="radio2" name="radios" required></input>
         <label for="radio1"> Female&nbsp;&nbsp;</label>
         <input className="radio_btn" type="radio" id="radio3" name="radios" required></input>
         <label for="radio1"> Other&nbsp;&nbsp;</label>
      </div>
         
      <div>
         <label >
           <p>Name</p>
           <input className="input_box" name="name" placeholder="Your Name" required/>
         </label>
         <label >
           <p>Lastname</p>
           <input className="input_box" name="name" placeholder="Your Lastname" required/>
         </label>
         <label > 
           <p>Email</p>
           <input className="input_box" type="email" name="email" id="email" placeholder="Please enter your email" required>
           </input>
         </label>
         <div className="checkbox">
         <input type="checkbox" id="check" name="check1" required></input>
         <label for="check"> I agree with the privacy policies</label>
           </div>
           <div className="btn"><button type="submit">Subscribe</button></div>     
       </div>
       
      </form>
    </div>
</>
  );
}

export default App;
