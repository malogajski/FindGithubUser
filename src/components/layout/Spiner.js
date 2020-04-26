import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default function Spiner() {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
}
