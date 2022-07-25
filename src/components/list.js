import React from 'react'
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react'
import LikeBtn from "./counter";
import { Link } from 'react-router-dom';


function App() {
  const [searchTerm,setSearchTerm]=useState('');
 
  return (
    
 
    <div className="App bg-cover bg-[url('./asset/image/kfc.jpg')] min-h-screen">
      <nav className="sticky top-0 bg-yellow-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">

            <div className="flex  md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Search</span>
                </button>
                <div className="hidden relative md:block">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Search icon</span>
                </div>
                <input onChange={event =>{setSearchTerm(event.target.value)}} type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                </div>
                <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                <span className="sr-only">Open menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-search">
                <div className="relative mt-3 md:hidden">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input onChange={event =>{setSearchTerm(event.target.value)}} type="text" id="search-navbar" className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                </div>
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    
                    <Link to="/">
                    <li>
                    <button href = '/' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</button>
                    </li>
                    </Link>

                    <Link to="/SignIn">
                    <li>
                    <button href = './signIn' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign in</button>
                    </li>
                    </Link>

                </ul>
                </div>
            </div>
            </nav>



      <div className="">
 
        
          
          <ul className='top-[150px]' id='myUL'>
          
          

                {JSONDATA.filter((val)=>{
                  if(searchTerm === ""){
                    return val;
                  }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                  }
                }).map((val,key)=>{
                  
                return (
                <li className='user inline-flex m-[15px]' key={key}>
                  <div className='rounded-md h-[200px] w-[300px] flex flex-col space-y-12 hover:bg-blue-600 transition duration-500 hover:scale-105 bg-[url(./asset/image/1.jpg)]'
                  style={{  
                    backgroundImage: "url(" + val.background + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                  }}
                  >

                      
                      <div className=" text-3xl bg-yellow-200 rounded-t-md">{val.first_name}</div>
                      <div className="bg-yellow-200 w-[150px] rounded-3xl ml-[75px]">
                        {val.last_name}
                      </div>

                      <div className="flex space-x-20 content-center ml-[70px]">

                          <button id={key} className="text-xl">
                            <LikeBtn />
                          </button>

                        <div className="text-3xl bg-yellow-200 rounded-xl">{val.price}</div>
                      </div>       
                  </div>
                </li>
                )
                })}

          </ul>  
        </div>

    </div>
  );
}

export default App;
