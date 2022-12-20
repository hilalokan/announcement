import React, {Component} from "react";

class Announcement extends Component{
    onDeleteClick(id,e){
        const {deleteAnnouncement} = this.props;
        deleteAnnouncement(id);
     }

    render(){
        const {id,text,date} =this.props;

        return(
            <tr>
                <td>{text}</td>
                <td>{date}</td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this,id)} className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Announcement;