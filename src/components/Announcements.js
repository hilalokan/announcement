import React,{Component} from "react";
import Announcement from "./Announcement";

class Announcements extends Component {

    render(){
        const {announcements, deleteAnnouncement} = this.props;

        return(
            <table className="table">
                <thead className = "table-light">
                    <tr>
                        <th scope="col">Announcement</th>
                        <th scope="col">Date</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        announcements.map(announcement => {
                            const {text, date} = announcement;

                            return <Announcement key = {text}
                                text = {text}
                                date = {date}
                                deleteAnnouncement = {deleteAnnouncement}
                            />
                            
                        })
                    }
                
                </tbody>
            </table>
        );
    }
}
export default Announcements;