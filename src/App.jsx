  import React,{lazy,Suspense, useEffect, useState} from 'react'
  import Body from './components/Body'
  import Header from './components/Header'
  import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
  import About from './components/About'
  import Contact from './components/Contact'
  import Error from './components/Error'
  import RestaurantMenu from './components/RestaurantMenu'
  import UserContext from './utils/UserContext'
  import { Provider } from 'react-redux';
  import appStore from './utils/appStore'
import Cart from './components/Cart'
  const Grocery = lazy(()=>import('./components/Grocery'));
  function App() {
    const[user,setuser]=useState();
    useEffect(()=>{
      const data={
        name:"aayush",
      }
      setuser(data.name);
    },[])
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedUser:user,setuser}}>
        <div className=''>
        <Header/>
        <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>
    )
  }
  
  const appRouter = createBrowserRouter([
    {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      
    ],
    errorElement:<Error/>
    },
   
    
  ]) 
  function Main() {
    return <RouterProvider router={appRouter} />;
  }
  
  export default Main;
