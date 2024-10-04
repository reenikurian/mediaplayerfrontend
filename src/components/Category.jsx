import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { deleteCategory, getAllCategory, getAllVideos, getAllVideosById, updateCategory } from '../services/AllApi';
import { addCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoCard from './VideoCard';

function Category() {
    const [show, setShow] = useState(false);

const[categoryName,setCategoryName]=useState()
const[allCategory,setAllCategory]=useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddCategory=async()=>{
      if(!categoryName){
        alert("Please fill the form completely")
      }
      else{
        let body={
          categoryName:categoryName,
          allVideos:[]
        }
        const response =await addCategory(body)
        if(response.status===201){
          toast.success(`${categoryName} sucessfully inserted`)
          handleClose()
          setCategoryName('')
        }
        else{
          toast.error("Something went wrong")
        }
      }
   
      }
      const getCategory=async()=>{
        const response=await getAllCategory();
        const {data}=response;
        console.log("category details");        
        console.log(data);
        setAllCategory(data)
        
      }
      useEffect(()=>{
        getCategory();
      },[])

      const handleDelete=async(categoryId)=>{
        const result=await deleteCategory(categoryId)
        console.log("delete response");
        console.log(result);
        if(result.status===200){
          getCategory()
        }
        else{
          toast.error("Something went wrong")
        }
        
      }
      const videoDrop=async(e,id)=>{
        console.log("===on Drop===");
        console.log("Category id:",id);
        const videoid=e.dataTransfer.getData("VideosID")   
        console.log(`Video with id ${videoid} need to put inside category with id ${id}`);
        const {data}=await getAllVideosById(videoid);
        console.log("video details");       
        console.log(data);
        const selectedCategory=allCategory?.find(item=>item.id===id);
        console.log("====Selected category===");
        console.log(selectedCategory);
        selectedCategory.allVideos.push(data)
        console.log("=====selected category======");
        console.log(selectedCategory);
        const response=await updateCategory(selectedCategory,id)
        getCategory();
        
      }
      const dragOver=(e)=>{
        //onDragOver method will trigger page refresh,so the VideoID we are passing may lost
        e.preventDefault();
        console.log("===inside drag over==");
        
      }
  return (
   <>
   <button className='btn btn-warning'onClick={handleShow}>Add New Category</button>
   {
    allCategory?.length>0?
      allCategory.map((item)=>(
        <div className='m-3 border border-secondary rounded p-3'
        droppable onDragOver={(e)=>dragOver(e)}
        onDrop={(e)=>videoDrop(e,item.id)}
        >

          <div className='d-flex justify-content-between align-items-center'>
            <h6 style={{color:'white'}}>{item.categoryName}</h6>
            <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash" ></i></button>
          </div>
          {
            item.allVideos.length>0?
            item.allVideos?.map(card=>(
              <VideoCard displayVideo/>
            ))
            
            : <p>nothing to display</p>
          }
        </div>
     )):
     <p>No Category Found</p>
    
   }
   <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton >
          <Modal.Title><i class="fa-solid fa-list text-warning me-3"></i><span className='textstyle'>Add Category</span> </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <p className='textstyle' style={{fontWeight:'700'}}>Please Fill The Form</p>
        <Form className='border border-secondary p-3 rounded' data-bs-theme='light'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Video ID" 
        onChange={(e)=>setCategoryName(e.target.value)}/>
      </Form.Group>
  
    </Form>
        </Modal.Body  >
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="btn btn-warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}></ToastContainer>
   </>
  )
}

export default Category