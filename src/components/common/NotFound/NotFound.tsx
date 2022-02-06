import React from 'react';
import {INotFound} from '../../../types/state';
import './NotFound.scss'

function NotFound(props: INotFound) {
  return <div className='not-found'>
      {props.message}
  </div>;
}

export default NotFound;
