import React, { useContext, useEffect, useReducer, useState } from 'react';
// import { toast } from 'react-toastify';
import axios from 'axios';
// import { Store } from '../Store';
// import { getError } from '../utils';

// import CategoryFilter4 from '../Cat.js'

// import Container from 'react-bootstrap/Container';
// import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
// import { Helmet } from 'react-helmet-async';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';
// import Button from 'react-bootstrap/Button';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload };
//     case 'UPDATE_REQUEST':
//       return { ...state, loadingUpdate: true };
//     case 'UPDATE_SUCCESS':
//       return { ...state, loadingUpdate: false };
//     case 'UPDATE_FAIL':
//       return { ...state, loadingUpdate: false };
//     case 'UPLOAD_REQUEST':
//       return { ...state, loadingUpload: true, errorUpload: '' };
//     case 'UPLOAD_SUCCESS':
//       return {
//         ...state,
//         loadingUpload: false,
//         errorUpload: '',
//       };
//     case 'UPLOAD_FAIL':
//       return { ...state, loadingUpload: false, errorUpload: action.payload };

//     default:
//       return state;
//   }
// };
export default function CreerProduit() {
//   const navigate = useNavigate();
//   const params = useParams(); // /product/:id
//   const { id: productId } = params;

//   const { state } = useContext(CategoryFilter4);
//   const { userInfo } = state;
//   const [name, setName] = useState('');
//   const [images, setImages] = useState([]);
   
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch({ type: 'FETCH_REQUEST' });
//         // const { data } = await axios.get(`/api/products/${productId}`);
//         setName(data.name);  
//         setImages(data.images);
//         dispatch({ type: 'FETCH_SUCCESS' });
//       } catch (err) {
//         dispatch({
//           type: 'FETCH_FAIL'
//         });
//       }
//     };
//     fetchData();
//   }, [productId]);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch({ type: 'UPDATE_REQUEST' });
//       await axios.put(
//         `/api/products/${productId}`,
//         {
//           _id: productId,
//           name,
//           images
//         }
//       );
//       dispatch({
//         type: 'UPDATE_SUCCESS',
//       });
//       toast.success('Product updated successfully');
//       navigate('/admin/products');
//     } catch (err) { 
//       dispatch({ type: 'UPDATE_FAIL' });
//     }
//   };
//   const uploadFileHandler = async (e, forImages) => {
//     const file = e.target.files[0];
//     const bodyFormData = new FormData();
//     bodyFormData.append('file', file);
//     try {
//       dispatch({ type: 'UPLOAD_REQUEST' });
//     //   const { data } = await axios.post('/api/upload', bodyFormData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           authorization: `Bearer ${userInfo.token}`,
//         },
//       });
//       dispatch({ type: 'UPLOAD_SUCCESS' });

//       if (forImages) {
//         setImages([...images, data.secure_url]);
//       } else {
//         setImage(data.secure_url);
//       }
//       toast.success('Image uploaded successfully. click Update to apply it');
//     } catch (err) {
//       toast.error(getError(err));
//     }
//   };
//   const deleteFileHandler = async (fileName, f) => {
//     console.log(fileName, f);
//     console.log(images);
//     console.log(images.filter((x) => x !== fileName));
//     setImages(images.filter((x) => x !== fileName));
//     toast.success('Image removed successfully. click Update to apply it');
//   };
  
  return ( 
    <Form.Group className="mb-3" controlId="imageFile">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" onChange={uploadFileHandler} /> 
    </Form.Group>
        
  );
}