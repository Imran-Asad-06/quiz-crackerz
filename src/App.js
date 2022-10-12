import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import Content from './Components/Content/Content';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          },
          {
            path:'/content',
            element: <Content></Content>
          },
          {
            path:'/statistics',
            element: <Statistics></Statistics>
          }
        ]
      }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
