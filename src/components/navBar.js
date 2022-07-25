import React from 'react'
import List from './list'
import {useState} from "react"
import JSONDATA from './MOCK_DATA.json'
import LikeBtn from "./counter";
import { Link } from 'react-router-dom';



function App() {

    return (

        
        <nav className="h-[55px] sticky top-0 bg-yellow-200 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-[20px]">
              <div className="container flex flex-wrap justify-between items-center mx-auto pt-[10px]">
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
        </nav>
        
  
    );
  }
  
  export default App;
  