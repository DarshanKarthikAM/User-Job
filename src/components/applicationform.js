import React,{useState} from 'react'
import {Form, Col,Row,Button} from "react-bootstrap";
import axios from 'axios'

const ApplicationForm=(props)=>{

    const [form,setForm] = useState(
        {
            name:'',
            email:'',
            phone:'',
            skills:'',
            jobTitle:'',
            experience:''
        }
    )

    const handleChange =(e)=>{
        const result ={...form,[e.target.name]:e.target.value}
        setForm(result)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        axios.post("http://dct-application-form.herokuapp.com/users/application-form",form)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else{
                alert('application applied successfully')
                setForm({
                    name:'',
                    email:'',
                    phone:'',
                    skills:'',
                    jobTitle:'',
                    experience:''
                })
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
      }

    return (
        <div className="container">
            <h2 style={{color:'blue'}} className="mb-4" >Apply for Job</h2>
            <Form onSubmit={handleSubmit} >
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
                <Form.Label column sm={2}>
                FullName
                </Form.Label>
                <Col sm={10}>
                    <Form.Control 
                            type="text" 
                            placeholder="Full Name" 
                            value={form.name}
                            onChange={handleChange}
                            name="name"
                    />
                </Col>
            </Form.Group><hr />
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label className="col-sm-2">Email</Form.Label>
                <Col sm={10}>
                <Form.Control 
                        type="email" 
                        placeholder="enter the email" 
                        value={form.email}
                        onChange={handleChange}
                        name="email"
                />
                </Col>
            </Form.Group><hr />
            <Form.Group as={Row} className="mb-3" controlId='formHorizontalContact'>
                <Form.Label className="col-sm-2" >Contact Number</Form.Label>
                <Col sm={10}>
                    <Form.Control 
                                type="text"
                                placeholder="enter a phone number(enter country code ex:+91 72***)"
                                value={form.phone}
                                onChange={handleChange}
                                name="phone"
                    />
                </Col>
            </Form.Group><hr />
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalJob">
                <Form.Label className="col-sm-2">Applying for Job</Form.Label>
                <Col sm={10}>
                    <Form.Select value={form.jobTitle}  name="jobTitle" onChange={handleChange}>
                        <option value=''>select</option>
                        <option value="FULL Stack Developer" >FULL Stack Developer</option>
                        <option value="Node.js Developer" >Node Js Developer</option>
                        <option value="Front-End Developer" >Front End Developer</option>
                        <option value="MEAN Stack Developer" >MEAN Stack Developer</option>
                    </Form.Select>
                </Col>
            </Form.Group><hr />
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label className="col-sm-2">Experience</Form.Label>
                <Col sm={10}>
                <Form.Control 
                        type="text" 
                        placeholder="enter the experience" 
                        value={form.experience}
                        onChange={handleChange}
                        name="experience"
                />
                </Col>
            </Form.Group><hr />
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalExp">
                <Form.Label className="col-sm-2">Technical Skills</Form.Label>
                <Col sm={10}>
                    <Form.Control as='textarea'
                            type="text"
                            value={form.skills}
                            name="skills"
                            placeholder="enter the skills"
                            onChange={handleChange}
                    />
                </Col>
            </Form.Group>
            <Button type="submit">Send Application</Button>
        </Form>
      </div>
    )
}
export default ApplicationForm