import React, { Component, PropTypes } from 'react';

const addStyle = {
  "marginBottom": "2rem",
};

class AddWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  /**
   * render - render form component
   *
   * @return {type} Description
   */
  render() {
    return (
      <div style={addStyle}>
        <form onSubmit={(e) => this.props.onSubmit(e)} className="form-inline">
          <label>Word</label>
          <input
            type="text"
            className="width-fix"
            name="word"
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.props.error === '' ? '' : <small className="form-text text-muted">{this.props.error}</small>}
      </div>
    );
  }
}

AddWord.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

AddWord.defaultProps = {
  error: '',
};

export default AddWord;
