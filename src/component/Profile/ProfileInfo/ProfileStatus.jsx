import React from 'react';
import s from './Profileinfo.module.css'

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
    }

  activetMode=()=>{
    this.setState({
     editMode:true
    });
  }

  deactivetMode=()=>{
    this.setState({
     editMode:false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange =(e)=>{
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.status !== this.props.status) {
    this.setState({
      status: this.props.status
    });
  }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onClick={this.activetMode}>{this.props.status || "Set status MZFK"}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} onBlur={this.deactivetMode} value={this.state.status} />
          </div>}
      </div>)
  }

}

export default ProfileStatus;