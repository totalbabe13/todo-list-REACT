import React from 'react';
import './AddButton.css';

class AddButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
       <div className="AddButton">
         <p className="plus">+</p>
       </div>
    );
  }
};

export default AddButton;
