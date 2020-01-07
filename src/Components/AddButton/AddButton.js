import React from 'react';
import './AddButton.css';
import FormModal from '../FormModal/FormModal';

class AddButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
       <div className="AddButton">
         <p className="plus">+</p>
         <FormModal />
       </div>
    );
  }
};

export default AddButton;
