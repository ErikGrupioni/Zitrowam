import React, { Component } from 'react';

import './Login.css';

export default class Login extends Component {
  state = {
    usarname: '',
  };

  handleInputChange = (e) => {
      this.setState({usarname:e.target.value});
  }

  handleSubmit = (e) => {
      e.preventDefault();

      const {usarname} = this.state;

      if(!usarname.length) return;
 
      localStorage.setItem('@ZitroWA:username',usarname);

      this.props.history.push('/ztw');
  }

  render() {
    return(
        <div className="login-wrapper">
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={this.state.usarname}
                    onChange={this.handleInputChange}
                    placeholder="Nome de usuario"/>
                <button type="submit">Entrar</button> 
            </form>
        </div>
    );
  }
}
