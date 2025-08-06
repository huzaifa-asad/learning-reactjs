import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/huzaifazz')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='bg-gray-700 text-white text-3xl p-4 m-4'>Github followers: {data.followers}</div>
  )
}

export default Github