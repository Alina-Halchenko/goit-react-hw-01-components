import React, {Component} from "react";
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIndex: 1,
  }

  setActiveIndex = index => {
    this.setState({activeOptionIndex: index});
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
      if (index === this.state.activeOptionIndex) {
        optionClasses.push('ColorPicker__option--active')
      }
    return optionClasses.join(' ');
  };

  render(){
    const {activeOptionIndex} = this.state;
    const {options} =this.props;

    const {label} = options[activeOptionIndex];
    
    return (
      <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Color chosen: {label} </p>

    <div>
      {options.map(({label, color}, index ) => (
        <button
          key={label}
          className={this.makeOptionClassName(index)}
          style={{backgroundColor: color}}
          onClick={()=> this.setActiveIndex(index)}>
        </button>
      ))}
    </div>
  </div>
    )
  }
}

export default ColorPicker;