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
            loader: async() => {
              return fetch('https://openapi.programming-hero.com/api/quiz');
            },
            element:<Home></Home>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          },
          {
            path:'/content',
            loader: async() => {
              return fetch('https://openapi.programming-hero.com/api/quiz');
            },
            element: <Content></Content>
          },
          {
            path:'/statistics',
            element: <Statistics></Statistics>
          }
        ]
      },
      {
        path:'*', element: <div>This Page is not found</div>
      }
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
        

        
    </div>
  );
}

export default App;
