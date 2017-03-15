import React, { Component, PropTypes } from 'react';

class ShowTry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeliness: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }


  render() {
    return (
      <form className="form-inline" onSubmit={(e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.likeliness);
      }}>
        <label>{this.props.word}</label>
        <input
          type="number"
          className="mb-1 mr-sm-1 mb-sm-0"
          defaultValue="0"
          name="likeliness"
          onChange={this.handleChange}
        />
        <button type="submit" >Set</button>
      </form>
    );
  }
}

ShowTry.propTypes = {
  word: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ShowTry;
