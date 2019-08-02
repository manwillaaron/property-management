import React, { Component } from 'react';
import './App.css';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
  }

  onOpened=()=>{
    console.log('this is opened')
  }

  onClosed=()=>{
    console.log('this is closed')
  }

  onToken = (token) => {
    console.log(token)
    let { amount } = this.state
    amount /= 100
    console.log(amount)
    token.card = void 0
    axios.post('/api/payment', { token, amount: this.state.amount }).then(res => {
      console.log(res)
      alert(`Congratulations you paid Kevin ${amount}!`)
    })
  }

  render() {
    // console.log(typeof this.state.amount)

    return (
      <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'50px'}}>
        <StripeCheckout
          name='CLass' //header
        //   image={imageUrl}
          description='This is stuff going beneath the header' //subtitle - beneath header
          stripeKey={process.env.REACT_APP_STRIPE_KEY} //public key not secret key
          token={this.onToken} //fires the call back
          amount={this.state.amount} //this will be in cents
          currency="USD" 
          // image={imageUrl} // the pop-in header image (default none)
          // ComponentClass="div" //initial default button styling on block scope (defaults to span)
          panelLabel="Submit Payment" //text on the submit button
          locale="en" //locale or language (e.g. en=english, fr=french, zh=chinese)
          opened={this.onOpened} //fires cb when stripe is opened
          closed={this.onClosed} //fires cb when stripe is closed
          allowRememberMe // "Remember Me" option (default true)
          billingAddress={false}
          // shippingAddress //you can collect their address
          zipCode={false}
        >
          {/* <button>Checkout</button> */}
        </StripeCheckout>
        <input value={this.state.amount}
        type='number'
        onChange={e=>this.setState({amount:+e.target.value})}/>
      </div>
    )
  }
}

export default App;




// import React, {Component} from 'react';
// import {CardElement, injectStripe} from 'react-stripe-elements';

// class CheckoutForm extends Component {
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//   }

//   async submit(ev) {
//     // User clicked submit
//   }

//   render() {
//     return (
//       <div className="checkout">
//         <p>Would you like to complete the purchase?</p>
//         <CardElement />
//         <button onClick={this.submit}>Send</button>
//       </div>
//     );
//   }
// }

// export default injectStripe(CheckoutForm);