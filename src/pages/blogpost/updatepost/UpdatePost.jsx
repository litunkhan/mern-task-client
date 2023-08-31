import { data } from 'autoprefixer'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdatePost = () => {
  const datas = useLoaderData()
  console.log(datas)
  const handlesubmit = (e)=>{
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const image = form.image.value
    const discribtion = form.discription.value
    const updatedUser = {title,image,discribtion}
    fetch(`${import.meta.env.VITE_URL}/updateblog/${datas._id}`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updatedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        alert('apdated successfull')
      }
    })
  }
  return (
    <div className="  py-6 max-w-[1000px] mx-auto flex justify-between flex-col items-center md:flex-row   mt-8 text-black">
        <div className="banner-content md:w-[60%] pr-4 text-center md:text-left">
          <h1 className=" uppercase text-gray-600 text-6xl md:text-8xl font-bold drop-shadow-lg shadow-black mb-2">
            Update Post
          </h1>
          <p className="text-lg mb-4">
            Explore the latest insights, tips, and trends in our comprehensive
            blog post. Discover engaging content that covers a wide range of
            topics, from technology and lifestyle to health and travel, all
            curated to keep you informed and entertained
          </p>
          <button className="bg-orange-500 px-4 text-white rounded-lg shadow">
            Learn More
          </button>
        </div>
        <div className="banner-image w-[95%] md:w-[40%] mt-3 md:mt-0">
          <form
            onSubmit={handlesubmit}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label
                htmlFor="author"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Author Name
              </label>
              <input
                type="text"
                name="user"
                id="author"
                defaultValue={datas?.author}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="blog title"
                defaultValue={datas?.title}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog Image
              </label>
              <input
                type="url"
                name="image"
                id="image"
                placeholder="Set image url"
                defaultValue={datas?.image}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="discripstion"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Blog discription
              </label>
              <textarea
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                name="discription"
                id="discripstion"
                cols="30"
                rows="5"
                defaultValue={datas?.discribtion}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-orange-600 p-2 rounded-md"
            >
              Update Post
            </button>
          </form>
        </div>
      </div>
  )
}

export default UpdatePost
