import React,{useState,useEffect} from 'react'
import {Modal} from 'react-bootstrap'
import axios from 'axios'

const ModalBtn = (props)=>{
    const {show,showChange,_id} = props
    const [user,setUser] = useState({})

    console.log(_id)
    useEffect(()=>{
        axios.get(`http://dct-application-form.herokuapp.com/users/application-form/${_id}`)
            .then((response)=>{
                const result = response.data
                setUser(result)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    return (
        <Modal
            show={show}
            onHide={() => showChange()}
        >
            <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                      {user.name}  Profile
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>contact Number - {user.phone}</h4>
                    <h4>Email - {user.email}</h4>
                    <h4>Skills - {user.skills}</h4>
                    <h4>Experience - {user.experience}</h4>
            </Modal.Body>
        </Modal>
    )
}
export default ModalBtn