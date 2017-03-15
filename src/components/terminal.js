import React, { PropTypes } from 'react';
import RunButton from './run_button';
import RestartButton from './restart_button';

const Terminal = ({ onRun, onRestart, children }) => (
  <div className="terminal-panel">
    <div className="panel-header">
      Terminal
    </div>
    <div className="card-block">
      <RunButton onClick={onRun} />
      <RestartButton onClick={onRestart} />
    </div>
    {children}
  </div>
);

Terminal.propTypes = {
  onRun: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};


export default Terminal;
