import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Lessons from './Lessons';
import Community from './Community';
import Book from './Book';
import Help from './Help';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import LessonDetails from './LesssonDetails';

function App() {

  const title = "Mountain Soccer Club"

  return (
    <div className="page-container">
    <div className="content-wrap">
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/lessons/:id">
                <LessonDetails />
              </Route>
              <Route path="/lessons">
                <Lessons />
              </Route>
              <Route path="/community">
                <Community />
              </Route>
              <Route path="/book">
                <Book />
              </Route>
              <Route path="/help">
                <Help />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
    <Footer />
    </div>
  );
}

export default App;
