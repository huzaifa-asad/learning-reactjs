import React from 'react'

function Cards({username, btnText, imgSource}) {
    console.log(username)
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 m-5">
  <img className="w-full h-full object-cover" src={imgSource} alt="Card Image" />
  <div className="p-6">
    <h1 className="text-xl font-semibold text-gray-800 mb-2">{username}</h1>
    <p className="text-gray-600 text-sm mb-4">
      This is a concise card component built with Tailwind CSS. Use it for any type of content.
    </p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">{btnText}</button>
  </div>
</div>
  )
}

export default Cards