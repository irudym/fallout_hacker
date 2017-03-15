import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Terminal from '../components/terminal';
import ShowTry from '../components/show_try';
import { addLikeliness, updateLikeliness, clearLikeliness } from '../actions/actions';
import { solver } from '../utils/solver';

/**
 * TerminalContainer
 */
export class TerminalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    };

    this.handleRun = this.handleRun.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleRun() {
    this.setState({
      error: '',
    });
    const word = solver(this.props.dictionary, this.props.likeliness);

    if(word === '' || word === undefined) return;
    this.props.addLikeliness(word);
  }

  handleSubmit(index, likeliness) {
    const likes = parseInt(likeliness);
    if(likes < 0) {
      this.setState({
        error: 'likeliness cannot be less than 0',
      });
      return;
    }
    if(this.props.dictionary.length > 0 && likes > this.props.dictionary[0].length) {
      this.setState({
        error: 'likeliness cannot exceed amount of letters',
      });
      return;
    }

    this.props.updateLikeliness(index, likes);
    const word = solver(this.props.dictionary, this.props.likeliness);
    if(word === undefined) {
      this.setState({
        error: 'something went wrong, or you provided wrong number...',
      });
      return;
    }
    this.props.addLikeliness(word);
    this.setState({
      error: '',
    });
  }

  handleRestart() {
    this.setState({
      error: '',
    });
    this.props.restartHack();
  }


  render() {
    return (
      <Terminal onRun={this.handleRun} onRestart={this.handleRestart}>
        {this.state.error !== '' ? <small>{this.state.error}</small> : ''}
        <ul className="list-group">
          {this.props.likeliness.map((value, i) => <ShowTry key={i} word={value.word} onSubmit={(likeliness) => this.handleSubmit(i, likeliness)}/>)}
        </ul>
      </Terminal>
    );
  }
}

TerminalContainer.propTypes = {
  likeliness: PropTypes.arrayOf(PropTypes.object).isRequired,
  dictionary: PropTypes.arrayOf(PropTypes.string).isRequired,
  addLikeliness: PropTypes.func.isRequired,
  updateLikeliness: PropTypes.func.isRequired,
  restartHack: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  likeliness: state.likeliness,
  dictionary: state.dictionary,
});

const mapDispatchToProps = (dispatch) => ({
  addLikeliness: (word) => dispatch(addLikeliness(word)),
  updateLikeliness: (index, likes) => dispatch(updateLikeliness(index, likes)),
  restartHack: () => dispatch(clearLikeliness()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TerminalContainer);
