import App from "../App";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "../pages/Homepage";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                path: '/',
                element: <Homepage />,
                },
            ]
        }
    ]
);

const Router = () => <RouterProvider router={router} />;
export default Router;