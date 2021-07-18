import {Comment} from './Comment'

const Community = () => {
    return (
        <div className="community">
            <h2>Meet community members</h2>
            <label>User1:</label>
                <input
                type="text"
                placeholder="Hey Everyone! I'm looking for 1 more person to play with this Sunday! Please Reply to me at my email if Interested: example@gmail.com" />
            <br /> <br />

            <label>User2: - </label>
                <input
                type="text"
                placeholder="Hey Everyone! I am free next weekend. Anybody want to play together?" />
            <br /> <br />

            <label>User3: - </label>
                <input
                type="text"
                placeholder="IMPORTANT INFO: Field is CLOSED next week since the grass are being trimmed." />
            <br /> <br />

            <label>User4: - </label>
                <input
                type="text"
                placeholder="Hello Everyone. The Youth Tournament is tomorrow. Please email me if you would like to sign up!" />
            <br /> <br /> <br />

            <form>
                <label>Name: </label> <br />
                <input
                type="text" /> <br />
                <label>Message:</label> <br />
                <textarea
                required
                ></textarea>

                <br />
                <button>Comment</button>
            </form>
        </div>
      );
}

export default Community;