import React from 'react';
import Fade from 'react-reveal/Fade';
import './PressHereButton.css';

class PressHereButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
        
            <h1>
                <Fade className='client-msg'  bottom  opposite cascade collapse when={this.state.show} >
                Happy having you ,Welcome to  Boss Interview! Good Luck ^_^
                </Fade>
                <button
                className="client-btn"
                type="button"
                onClick={this.handleClick}
                >
                { this.state.show ? 'Keep it secret Boss ;)' : 'Message for you Here!'  } 
                </button>
            </h1>
      
    );
  }
}

export default PressHereButton;