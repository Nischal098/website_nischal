import { useState } from "react";
import { useParams } from "react-router-dom";
import {DateTimePickerComponent} from '@syncfusion/ej2-react-calendars'

const LessonDetails = () => {
    const { id } = useParams()

    const [blogs, setBlogs] = useState([
        { title: 'Beginner Classes', body: 'Learn the Basics. Learn the basics of the sport and important tips from the coach.', author: 'Mario', id: 1 },
        { title: 'Advanced Classes', body: 'Finished your beginner class? Learn advanced tactics and skills to hone your inner soccer spirit!', author: 'Yoshi', id: 2 },
        { title: 'Dribbling Mechanics', body: 'Having a hard time dribbling? Fear not! We will teach you how to dribble and pay attention to the match.', author: 'Luigi', id: 3 },
        { title: 'Kicking Guides', body: 'These lessons are aimed toward allowing an individual to learn more about how to kick and improve their aim.', author: 'Mario', id: 4 }
      ])


    let blog = blogs[id - 1]

    return (
        <div className="blog-details">
            <h2> { blog.title }</h2>
            <p> <h5>Coached by: </h5>  { blog.author }</p>
            <p> <h5> Description: </h5>
                {blog.body}
            </p> <br />


            <form>
            <label>Participant Name: </label>
            <input
            type="text"
            required
            />

            <label>Phone Number: </label>
            <input
            type="text"
            required
            />

            <label>Email: </label>
            <input
            type="text"
            required
            />

            <label>Pick Date and Time:</label>
            <DateTimePickerComponent></DateTimePickerComponent>

            <label>Additional Info:</label>
            <textarea
            required
            ></textarea>

            <br />
            <button>Book Lessons</button>
            </form>
        </div>
     );
}

export default LessonDetails;