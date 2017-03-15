import React, { Component } from 'react';
import './styles/App.css';

import RunButton from './components/run_button';
import Dictionary from './containers/dictionary_container';
import TerminalContainer from './containers/terminal_container';

/**
 * App - Description
 * @extends Component
 */
class App extends Component {
  /**
   * render - render appication component
   *
   * @return {type} nothing
   */
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TerminalContainer />
          </div>
          <div className="col-md-6 header">
            <Dictionary />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
