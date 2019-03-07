import React, { Component } from 'react';

import "./ztw.css";


export default class Timeline extends Component {
  state = {
    phone:'',  
    Wmsg:'',
  }; 
  
  handleNewWMsg = e => {
    if(e.keyCode !== 13) return;

    const phone = this.state.phone;
    const author = localStorage.getItem("@ZitroWA:username");
    const wmsg = this.state.wmsg;
    
    console.log(phone,author,wmsg) 
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${author}+${wmsg}`,"_blank"); 
  };

  handleInputChangeMsg = e => {
      this.setState({wmsg: e.target.value});
  }

  handleInputChangePhone = (e) => {
    this.setState({phone:e.target.value});
  }
  

  render() {
    return (
      <div className="timeline-wrapper login-wrapper">
      <form>
            <input 
                    value={this.state.phone}
                    onChange={this.handleInputChangePhone}
                    placeholder="Nome de usuario"/>
          <textarea
              value={this.state.wmsg}
              onChange={this.handleInputChangeMsg}
              onKeyDown={this.handleNewWMsg}
              placeholder="O que esta acontecendo?"
          />    
      </form>
      
  </div>
    );
  }
}
