import React from 'react';
import Back from './Back';
import Default from './Default';

export default function Header(props) {
  switch (props?.type) {
    case 'back':
      return <Back {...props} />;

    default:
      return <Default {...props} />;
  }
}
