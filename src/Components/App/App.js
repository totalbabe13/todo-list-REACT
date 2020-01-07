import React from 'react';
import './App.css';
import AddButton from '../AddButton/AddButton';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      itemList: []
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(newListItem) {
    alert('Hello from app Component!');
    console.log(newListItem);
  }

  render(){
    return (
      <div className="App">
        <div className="conatiner-one ">
          <div className="container-two">
            <AddButton handleUpdate={this.handleUpdate} />
          </div>
        </div>
     </div>
   );
 }


}

export default App;
