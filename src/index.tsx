import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from "./router/router.tsx";
import { Provider } from "react-redux";
import {RouterProvider} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {store} from "./store/store.tsx";
// import Navbar from "./components/Navbar.tsx";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);