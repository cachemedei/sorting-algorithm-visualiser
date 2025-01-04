import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Nav from './components/Nav';
import MergeSort from './components/MergeSort';
import BubbleSort from './components/BubbleSort';
import QuickSort from './components/QuickSort';
import HeapSort from './components/HeapSort';
import Home from './components/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Nav />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/merge', element: <MergeSort /> },
            { path: '/bubble', element: <BubbleSort /> },
            { path: '/quick', element: <QuickSort /> },
            { path: '/heap', element: <HeapSort /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);