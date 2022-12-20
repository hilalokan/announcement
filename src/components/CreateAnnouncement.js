import React, {Component} from 'react';

class CreateAnnouncement extends Component{
    state = {
        text: "",
        date: ""
    }
    onTextChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onDateChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onAddSubmit(e){
        const {addAnnouncement} = this.props;
        const {text, date} = this.state;
        const newAnnouncement = {
            id: Math.random(),
            text: text,
            date: date
        };
        addAnnouncement(newAnnouncement);
        e.preventDefault();
    }
    render(){
        const {text, date} = this.state;
        return (
            <div className='card'>
                <h4 className='card-header'>Add a new announcement</h4>
                <div className='card-body'>
                    <form onSubmit={this.onAddSubmit.bind(this)}>
                        <div className='form-group'>
                            <label htmlFor='text_announcement'>Announcement</label>
                            <input
                                type="text"
                                name="text"
                                id="text"
                                placeholder='Enter a announcement'
                                className='form-control'
                                value = {text}
                                onChange = {this.onTextChange.bind(this)}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='date'>Date</label>
                            <input
                                type="text"
                                name="date"
                                id="date"
                                placeholder='Enter the date'
                                className='form-control'
                                value = {date}
                                onChange = {this.onDateChange.bind(this)}
                            />
                        </div>
                        <br/>
                        <button type='submit' className='btn btn-primary'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateAnnouncement;