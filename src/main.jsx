import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.js";
const root = document.querySelector('#root');

createRoot(root).render(<RouterProvider router={router}/>)
