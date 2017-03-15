import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Dictionary from '../components/dictionary';
import AddWord from '../components/add_word';
import { addWord, deleteWord } from '../actions/actions';


class DictionaryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      value: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const word = e.target.word.value.toLowerCase();
    if(word !== '') {
      if(this.props.dictionary.length > 0 &&
        this.props.dictionary[0].length !== word.length) {
        this.setState({
          error: 'the entered word has wrong amount of letters',
        });
        return;
      }
      this.props.addWord(word);
      this.setState({
        error: '',
        value: '',
      });
    } else {
      this.setState({
        error: 'Word cannot be empty!',
      });
    }
  }

  handleDelete(index) {
    this.props.deleteWord(index);
  }

  render() {
    const usedWords = this.props.likeliness.reduce((acc, val) => {
      acc.push(val.word);
      return acc;
    }, []);

    return (
      <div className="terminal-panel">
        <div className="panel-header">
          Dictionary
        </div>
        <div className="card-block">
          <AddWord onSubmit={this.handleSubmit} error={this.state.error} value={this.state.value}/>
          <Dictionary dictionary={this.props.dictionary} usedWords={usedWords} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

DictionaryContainer.propTypes = {
  addWord: PropTypes.func.isRequired,
  deleteWord: PropTypes.func.isRequired,
  dictionary: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => (
  {
    dictionary: state.dictionary,
    likeliness: state.likeliness,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    addWord: (value) => dispatch(addWord(value)),
    deleteWord: (value) => dispatch(deleteWord(value)),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(DictionaryContainer);
