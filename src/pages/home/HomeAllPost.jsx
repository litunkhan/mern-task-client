import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../../assets/no-image.png";
const HomeAllPost = () => {
  const localstrageusers = localStorage.getItem("user");
  // const [show, setShow] = useState(false);
  const [liked, setLiked] = useState(false);
  const user = JSON.parse(localstrageusers);
  const [blogs, setBlogs] = useState([]);
  const toggleLike = () => {
    setLiked(!liked);
  };
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/getblog`).then((res) => {
      setBlogs(res.data);
      console.log(blogs);
    });
  }, []);
  
  console.log(blogs);
  const[comment,setComment] = useState('')
  
  const handleComment = async(e)=>{
         const text = comment
         const username = user?.username
         try {
          await axios.patch(`${import.meta.env.VITE_URL}/api/posts/${e}`, {
            username,
            text,
          });
          console.log(blogs);
          // You can add further logic, like updating the UI with the new comment.
        } catch (error) {
          console.error('Error adding comment:', error);
        }

  }
  
  return (
    <div className="max-w-[1080px] mx-auto flex flex-col mt-12 md:flex-row gap-6">
      
        <div className=" hidden md:block w-[250px] ">
          <div className="flex gap-4 items-center mx-3">
            <img
              className="w-[40px] h-[40px] rounded-full"
              src={image}
              alt="image"
            />
            <div>
             {user? <p className="">@{user?.username}</p>:'Please Login'}
             {user?'':<br></br>}
             {user? <p className="">Good day!</p>:'!Hurry up'}
            </div>
          </div>
        </div>
     
      <div>
        {blogs.map((singledata) => {
          return (
            <div
              key={singledata._id}
              className="border-2 border-gray-300 mb-4 py-2 rounded-md w-full md:w-[600px] "
            >
              <div className="flex gap-4 items-center mx-3">
                <img
                  className="w-[40px] h-[40px] rounded-full"
                  src={image}
                  alt="profile-image"
                />
                {singledata.author}
              </div>
              <div className="my-3 mx-3">Title: {singledata?.title}</div>
              <div>
                <img
                  className="w-full"
                  src={singledata?.image}
                  alt="post-image"
                />
              </div>
              <div className="my-3 mx-1">
                {singledata?.discribtion.slice(0,70)}...
                <span className="text-blue-600">Show more</span>
              </div>
            
              
             <form  className="my-4">
                <i className="fa-regular fa-comment mx-4"></i>
                <input
                  className=" outline-none border-none w-[80%]"
                  type="text"
                  name="text"
                  id=""
                  onChange={(e)=>setComment(e.target.value)}
                  placeholder="Add a Comment ..."
                />
                <button
                onClick={()=>{
                  handleComment(singledata._id)
                  setComment('')}} type="submit" className="font-bold cursor-pointer">Post</button>
      </form>
      <div>
        {singledata.comment&&(
          singledata.comment.map(singlecomment=>{
            return <p className="mx-3">{singlecomment?.username}:
            {singlecomment.text}</p>
          })
        )}
      </div>
      <div>
             <button
                className={`mx-3 ${
                  liked ? "text-blue-800" : "text-black"
                }`}
                onClick={toggleLike}
              >
               <i onClick={async()=>{
                await axios.patch(`${import.meta.env.VITE_URL}/api/posts/${singledata._id}/like/${user?._id}`)
                window.location.reload()
               }} className="fa-regular fa-thumbs-up"></i>
              </button>
              <i className="fa-solid fa-triangle-exclamation"></i>
             </div>
             {singledata.like&&(
              <p className="mx-3">{singledata.like.length}</p>
             )}
            </div>
          );
        })}
        
      </div>
     
    </div>
  );
};
export default HomeAllPost;
