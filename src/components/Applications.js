import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Table,Button,Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ModalBtn from './Modal'
import ShowStatus from './ShowStatus'

const Applications=(props)=>{
    console.log(props)
    const {title} = props
    const [appliedforms,setAppliedForms] = useState([])
    const [data,setData] = useState([])
    const [click,setClick] = useState(false)
    const [show, setShow] = useState(false);
    const [id,setId] = useState()
    const [update,setUpdate] = useState('')

    const showChange =()=>{
        setShow(false)
    }
    
    const handleShow =(id)=>{
        setId(id)
        setShow(true)
    }

    const handleUpdate = (e)=>{
        setUpdate(e.target.value)
    }

    useEffect(()=>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
        .then((response)=>{
            const result=response.data
            setAppliedForms(result)
            const filterData = result.filter(form=>{
                return form.status === "applied" && form.jobTitle === title
            })
            setData(filterData)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[click,title])

    const updateStatus =(id,status)=>{
        axios.put(`http://dct-application-form.herokuapp.com/users/application-form/update/${id}`,{status:status})
        .then((response)=>{
            const result=response.data
            console.log(result)
            setClick(!click)
        })
        .catch((err)=>{
            alert(err.message)
        })

    }

    return (
        <div>
            <select className="m-3" value={update} onChange={handleUpdate} >
                <option value=''>select</option>
                <option value='shortlisted'>Shortlisted</option>
                <option value='rejected'>Rejected</option>
            </select>
            {update === '' && (<>
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
                        <th>Update Application Status</th>
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
                                    <Button className="m-3" onClick={()=>{updateStatus(d._id,'shortlisted')}}>Shortlist</Button>
                                    <Button className="btn" onClick={()=>{updateStatus(d._id,'rejected')}}>Reject</Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
           </Table></>)}
           {
               update !== '' && <ShowStatus update={update} appliedforms={appliedforms} title={title} />
           }

          {
              show && <ModalBtn show={show} showChange={showChange} _id={id} />
          }
        </div>
    )
}
export default Applications