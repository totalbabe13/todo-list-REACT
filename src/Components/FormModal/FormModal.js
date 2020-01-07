import React from 'react';
import './FormModal.css';

class FormModal extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="modal-conatiner">
          <div className="form-container">
             <form  className="form-input">
                <input className="title-field" name="-x" placeholder="Type in your To Do item..." required="" />
                <input className="description-field" name="-x" placeholder="Description or notes" required="" />
                <input className="date-field" type="date" name="date-x" required="" />
                <input className="save-button" type="submit" value="Save" />
                <input className="cancel-button" type="submit" value="X" />
             </form>
          </div>
      </div>
    );
  }
};

export default FormModal;
