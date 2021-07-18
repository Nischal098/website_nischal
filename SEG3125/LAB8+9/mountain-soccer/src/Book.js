import { useState } from "react";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'


const Book = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    return (
        <div className="book">
            <h2>Book the soccer field by selecting your Date and Time</h2>

            <form>
                <label>First & Last Name: </label>
                <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>List the Names of Members:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Pick Date and Time:</label>
                <DateTimePickerComponent></DateTimePickerComponent>

                <br /><br />
                <button>Book The Field</button>
            </form>

        </div>
      );
}

export default Book;