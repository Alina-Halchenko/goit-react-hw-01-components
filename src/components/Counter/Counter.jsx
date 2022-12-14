import React from 'react'; 
import './Counter.css'
import Controls from './Controls';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    // 
  }
  state = {
      value: this.props.initialValue,
    }

  handleIncrement = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      }
    })
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }))
  };
  render(){
    return (
      <div className='Counter'>
        <span className='Counter__value'>{this.state.value}</span>

        <Controls 
          onIncement={this.handleIncrement} 
          onDecrement={this.handleDecrement} />
      </div>
    )
  }

}

export default Counter;

