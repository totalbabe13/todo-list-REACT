import React from 'react';
import './FormModal.css';

class FormModal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      description:'',
      date:''
    }

    this.handleChangeInTitle = this.handleChangeInTitle.bind(this);
    this.handleChangeInDescription = this.handleChangeInDescription.bind(this);
    this.handleChangeInDate = this.handleChangeInDate.bind(this);
    this.captureInput = this.captureInput.bind(this);
  }

  handleChangeInTitle(e){
    let newTitle = e.target.value;
    this.setState({title : newTitle});
  }
  handleChangeInDescription(e){
    let newDescription = e.target.value;
    this.setState({description : newDescription});
    // console.log(newDescription)
  }
  handleChangeInDate(e){
    let newDate = e.target.value;
    this.setState({date : newDate});
    // console.log(newDate);
  }

  captureInput(e){
    e.preventDefault();
    this.props.handleUpdate(this.state)
  }

  render(){
    return(
      <div className="modal-conatiner">
          <div className="form-container">

             <form onSubmit={this.captureInput} className="form-input">

                <input onChange={this.handleChangeInTitle} className="title-field" name="-x" placeholder="Type in your To Do item..." required="" />

                <input onChange={this.handleChangeInDescription} className="description-field" name="-x" placeholder="Description or notes" required="" />

                <input onChange={this.handleChangeInDate} className="date-field" type="date" name="date-x" required="" />

                <input className="save-button" type="submit" value="Save" />
                <input className="cancel-button" type="submit" value="X" />
             </form>
          </div>
      </div>
    );
  }
};

export default FormModal;
