import React, {Component} from 'react';
import AddUser from "./components/CreateAnnouncement";
import Announcements from './components/Announcements';

class App extends Component{
  addAnnouncement(newAnnouncement){
    let updatedAnnouncements = this.state.announcements;
    updatedAnnouncements.push(newAnnouncement);
    this.setState({
      announcements: updatedAnnouncements
    })
  }
  deleteAnnouncement(id){
    let updatedAnnouncements = this.state.announcements;

    updatedAnnouncements = updatedAnnouncements.filter(announcement => announcement.id !== id);
    this.setState({
      announcements: updatedAnnouncements
    })
  }

  constructor(props){
    super(props);

    this.state = {
      announcements: [
        {
          text : "Bugün ders işlenmeyecek.",
          date : "20/12/2022"
        }
      ]
    };
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    this.addAnnouncement = this.addAnnouncement.bind(this);
  }
  render(){
    return (
      <div className = "container">
        <h4>Announcements</h4>
        <hr></hr>
        <AddUser addAnnouncement = {this.addAnnouncement}/>
        <hr></hr>
        <Announcements deleteAnnouncement = {this.deleteAnnouncement} announcements={this.state.announcements} />
      </div>
    );
  } 
}

export default App;
