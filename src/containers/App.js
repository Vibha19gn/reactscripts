import React, {Component} from 'react';
import '../styles/App.scss';
import Customers from "../components/customers";
import Spinner from '../common/spinner';

class App extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Customers/>
        <Spinner/>
      </div>
    );
  }
}

export default App;
