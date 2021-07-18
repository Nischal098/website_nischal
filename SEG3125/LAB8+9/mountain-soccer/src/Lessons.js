import { useState } from "react";
import { Link } from "react-router-dom";

const Lessons = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Beginner Classes', body: '', author: 'Mario', id: 1 },
        { title: 'Advanced Classes', body: '', author: 'Yoshi', id: 2 },
        { title: 'Dribbling Mechanics', body: '', author: 'Luigi', id: 3 },
        { title: 'Kicking Guides', body: '', author: 'Mario', id: 4 }
      ])

    return (
        <div className="lessons">
            <h2>Please Pick a Lessons</h2>
            <br />
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                <Link to={`/lessons/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <p>Coached by: { blog.author }</p>
                </Link>
                </div>
            ))}

        </div>
    );
}

export default Lessons;