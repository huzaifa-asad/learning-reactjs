import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/huzaifazz')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])


  return (
    <div className='bg-gray-700 text-white text-3xl p-4 m-4'>Github followers: {data.followers}
    <img className='flex h-45 rounded-full place-self-center-safe mt-4' src={data.avatar_url} alt="Github Profile" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/huzaifazz')
    return response.json()
}