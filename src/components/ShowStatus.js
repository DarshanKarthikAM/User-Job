import React,{useEffect, useState} from 'react'
import {Table,Button,Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import ModalBtn from './Modal'

const ShowStatus =(props)=>{
    const {appliedforms,update,title} = props
    const [data,setData] = useState([])
    const [show, setShow] = useState(false);
    const [id,setId] = useState()

    const showChange =()=>{
        setShow(false)
    }

    const handleShow =(id)=>{
        setId(id)
        setShow(true)
    }

    useEffect(()=>{
        const result = appliedforms.filter(form=>{
            return form.status === update && form.jobTitle === title
        })
        setData(result)
       
    },[update])

    return (
        <div>
            <div className="row">
            <h2 className="col-md-10">{title}</h2>
            <Link to="/admindashboard" className="col-md-2">Back</Link>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>jobTitle</th>
                        <th>Experience</th>
                        <th>View Details</th>
                        <th>Application Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 && data.map(d=>{
                            return <tr key={d._id}>
                                <td>{d.name}</td>
                                <td>{d.jobTitle}</td>
                                <td>{d.experience}</td>
                                <td><Button onClick={() => handleShow(d._id)}>View Details</Button></td>
                                <td>
                                    {update}
                                </td>
                            </tr>
                        })
                    }
                </tbody>
           </Table>
           {
              show && <ModalBtn show={show} showChange={showChange} _id={id} />
          }
        </div>
    )
}
export default ShowStatus