import React from 'react';
import ListItem from './ListItem';

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <ul>
      <ListItem className="list-item" index={0}>
        First item
      </ListItem>
      <ListItem className="list-item" index={1}>
        Second item
      </ListItem>
    </ul>
  </div>
);

export default App;
