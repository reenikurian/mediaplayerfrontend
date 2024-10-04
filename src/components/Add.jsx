import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
    const [show, setShow] = useState(false);

    //state to store all form field values
    const[videoDetails,setVideoDetails]=useState({
      caption:'',
      imageUrl:'',
      youtubeLink:''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addvideoDetails=async()=>{
      const{caption,imageUrl,youtubeLink}=videoDetails
      if( !caption || !imageUrl || !youtubeLink){
        toast.warning('Please fill the form completely')
      }
      else{
          console.log("final data");
          console.log(videoDetails);
          const response  =  await  uploadVideo(videoDetails);
          console.log(response)
          if(response.status===201){
            toast.success(`${response.data.caption} successfully uploaded`);
            setUploadVideoStatus(response.data)
            handleClose();
            setVideoDetails({
              caption:'',
              imageUrl:'',
              youtubeLink:''
            })
          }
          else{
            toast.error("Something went wrong")
          }
        }
    }
    const getEmbededLink=(data)=>{
      console.log("===inside getEmbededLink method===");
      const link=`https://www.youtube.com/embed/${data.slice(-11)}`
      console.log(link);
      let image_Url=`https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
      setVideoDetails({...videoDetails,youtubeLink:link,imageUrl:image_Url})
      }
  return (
<>
<div className='d-flex align-items-center '>
    <h5  className='textstyle me-3'>Upload A New Video</h5>
    <button className='btn ' onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fs-5" style={{color:'white'}}></i></button>
    
    <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton >
          <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i><span className='textstyle'>Upload Video</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <p className='textstyle' style={{fontWeight:'700'}}>Please Fill The Form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Caption"
         onChange={(e)=>setVideoDetails({...videoDetails, caption:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video Image URL"
         onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Video Youtube Link"
         onChange={(e)=> getEmbededLink(e.target.value)} />
      </Form.Group>
     
      
    </Form>
        </Modal.Body  >
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="btn btn-warning" onClick={addvideoDetails}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
</div>
</>
  )
}

export default Add