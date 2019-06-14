import React, { Component } from 'react';

import Smurf from './Smurf';
import { Link } from 'react-router-dom';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            );
          })}
        </ul>
        <Link to='/smurf-form'>Add Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
