import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import logo from './beast-bg@high-res.jpg';
import './App.css';

const url = "//wearetramp.us4.list-manage.com/subscribe/post?u=5f7ed5cf36a3daca6922e24f1&amp;id=6601987ce9";
 
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>
 
// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div className="Mailchimp-message-holder">
      	<b className="Mailchimp-header">Subscribe for updates</b>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>Sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Beast-logo" alt="logo" />
        <div className="Beast-subscribe">
   	   		{CustomForm()}
      	</div>
      </header>
    </div>
  );
}

export default App;
