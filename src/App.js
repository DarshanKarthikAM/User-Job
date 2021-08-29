import React from 'react'
import {Link,Route} from 'react-router-dom'
import ApplicationForm from './components/applicationform';
import AdminDashBoard from './components/Admin Dashboard';
import Applications from './components/Applications';

function App() {
  
  return (
    <div className="App">
        <Link to="/">Home|</Link>
        <Link to="/applicationform">Application Form</Link>
        <Link to="/admindashboard">|Admin Dashboard</Link>

        <Route path="/applicationform" component={ApplicationForm}  exact/>
        <Route path="/admindashboard" component={AdminDashBoard} exact />
        <Route path="/admindashboard/fullstack" render={(props)=>{
          return <Applications {...props} title="FULL Stack Developer" />
        }} />
        <Route path="/admindashboard/meanstack" render={(props)=>{
          return <Applications {...props} title="MEAN Stack Developer" />
        }} />
        <Route path="/admindashboard/nodejs" render={(props)=>{
          return <Applications {...props} title="Node.js Developer" />
        }} />
        <Route path="/admindashboard/frontend" render={(props)=>{
          return <Applications {...props} title="Front-End Developer" />
        }} />
    </div>
  );
}

export default App;
