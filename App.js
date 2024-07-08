import React from "react";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import AddStudentForm from "./components/AddStudentForm";
import UpdateStudentForm from "./components/UpdateStudentForm";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/students">Students</Link>
            </li>
            <li>
              <Link to="/students/add">Add Student</Link>
            </li>
            <li>
              <Link to="/students/update">update Student</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/students" exact component={StudentList} />
          <Route path="/students/add" component={AddStudentForm} />
          <Route
            path="/students/update/:id"
            render={(props) => (
              <UpdateStudentForm studentId={props.match.params.id} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
