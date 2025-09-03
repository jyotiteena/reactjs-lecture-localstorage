import { useForm } from 'react-hook-form'
import './App.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaTrash } from 'react-icons/fa';
import { FaPencil } from 'react-icons/fa6';

const App = () => {
  const [users, setUser] = useState([])
  const { register, reset, handleSubmit } = useForm()

  const [id, setId] = useState(null)

  function localData(data) {
    if (id === null) {
      const newData = {
        // id:Date.now(),
        id: uuidv4(),
        ...data
      }
      setUser([...users, newData])
    }else{
      alert("hello")
    }
    reset()
  }

  /////// for insert data into localstorage
  useEffect(() => {
    if (users?.length > 0) {
      localStorage.setItem('userData', JSON.stringify(users))
    }
  }, [users])

  /// get data from localstorage
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData?.length > 0) {
      setUser(userData)
    }
  }, [])

  function trash(id) {
    // alert(id)
    if (confirm("do you want to delete this user?")) {
      const filterData = users.filter((user) => user.id !== id)
      setUser(filterData)
    }
  }

  function update(id) {
    setId(id)
    const singleUser = users.find((user) => user.id === id)
    console.log(singleUser)
    reset(singleUser)
  }
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
        {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {id===null ? "submit" : "update"}
        </button> */}
        {
          id === null ?
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
            :
            <button type="submit" class="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">update</button>
        }
      </form>


      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Mobile
              </th>
              <th scope="col" class="px-6 py-3">
                Country
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.email}
                </th>
                <td class="px-6 py-4">
                  {user.mobile}
                </td>
                <td class="px-6 py-4">
                  {user.country}
                </td>
                <td class="px-6 py-4">
                  {user.gender}
                </td>
                <td class="px-6 py-4">
                  <button onClick={() => trash(user.id)}><FaTrash /></button>
                  <button className='mx-3' onClick={() => update(user.id)}><FaPencil /></button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>

    </>
  )
}

export default App