import { useForm } from 'react-hook-form'
import './App.css'
import { use, useEffect, useState } from 'react'
const App = () => {
  const [users,setUser] = useState([])
  const {register,reset,handleSubmit} = useForm()

  const [products,setProduct] = useState([])

  // arr = localStorage || []
  // console.log(...[444,45,3])

  function localData(data){
    setUser([...users,data])
    reset()
  }
  // localStorage.setItem('userList',JSON.stringify(users))
  // console.log("users.........")
  // console.log(users)

  async function showApi(){
    const res = await fetch('https://dummyjson.com/users') 
    const data = await res.json()
    setProduct(data.users)
  }

  // showApi()
  useEffect(()=>{
    showApi()
  },[])
  // [] = dependancy
  console.log(products)
  return (
    <>
      <form class="max-w-sm mx-auto" onSubmit={handleSubmit(localData)}>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input 
          
            {...register('email')}
          type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
        </div>
        <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile</label>
          <input
  {...register('mobile')}
          type="mobile" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div class="mb-5">
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
          <select {...register('country')} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

            <option value="UK">United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </select>
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
          <label htmlFor="male" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
            <input {...register('gender')} value="male" id="male" type="radio" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />

          <label htmlFor="female" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
            <input {...register('gender')} value="female" id="female" type="radio" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
          </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </>
  )
}

export default App