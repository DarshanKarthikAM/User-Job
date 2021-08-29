import React from 'react'
import {Nav} from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'

const AdminDashBoard=(props)=>{

    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link as={Link} to="/admindashboard/fullstack">Full Stack Developer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  as={Link} to="/admindashboard/meanstack">MEAN Stack Developer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  as={Link} to="/admindashboard/nodejs">Node Js Developer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link  as={Link} to="/admindashboard/frontend">Front End Developer</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    )
}
export default AdminDashBoard