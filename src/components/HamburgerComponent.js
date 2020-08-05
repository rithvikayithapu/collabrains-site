import React from 'react';
import { slide as Menu} from 'react-burger-menu';

import { LINKS } from '../dataStore';

const Hamburger = () => {

  return(
    <div className="d-block d-md-none">
      <Menu className="text-center text-dark">
        {LINKS.map((item) => (
            <a id={item.id} className="menu-item" href={item.href}>{item.title}</a>
        ))}
      </Menu>
    </div>
  );
}

export default Hamburger;