import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { BrowserRouter } from "react-router-dom"
import Container from './context/Container'
import axios from 'axios'

// export const axiosWithToken = axios.create({
//   baseURL:"http://localhost:3000",
//   headers:{
//       "Content-Type":"application/json",
//       "token":localStorage.getItem("token")
//   }
// }) 
  axios.defaults.baseURL="http://localhost:3000"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
  <App/>
  </Container>,
)
