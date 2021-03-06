import React, { Component } from 'react';
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }
    onChange(e) {
        this.setState({value: e.target.value}, function() {
            this.props.onChange(this.state.value);
        })
    }
  render() {
    return (
      <div>
      <label> Format </label>
        <select onChange={this.onChange.bind(this)}>
            <option value="html">HTML</option>
            <option value="text">TEXT</option>
        </select>
      </div>
    );
  }
}

export default Select;
