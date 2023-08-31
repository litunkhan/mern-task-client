import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Blogpost = () => {
  const localstrageusers  = localStorage.getItem('user')


  const user = JSON.parse(localstrageusers )
  const navigate = useNavigate()
  const handlePost = (e) => {
    e.preventDefault();
    const form = e.target;
    const author = form.user.value ? form.user.value : "anonymous";
    const title = form.title.value;
    const image = form.image.value;
    const discribtion = form.discription.value;
    const like = []
    const comment =[]
    const email = user?.email

    const blog = { author, title,image, discribtion,like,comment,email };
    
    if(!user){
     Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please login frist",
        showConfirmButton: false,
        timer: 1500,
      
      });
      navigate('/login')
      
      return

    }
    console.log(blog);
    axios.post(`${import.meta.env.VITE_URL}/blogpost`, blog).then((res) => {
      console.log(res)
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "posted blog",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    });
  };
  return (
    <>
      <h2 className="text-5xl text-center my-4">
        Yoy have to Login first for post blog
      </h2>
      <div className="  py-6 max-w-[1000px] mx-auto flex justify-between flex-col items-center md:flex-row   mt-8 text-black">
        <div className="banner-content md:w-[60%] pr-4 text-center md:text-left">
          <h1 className=" uppercase text-gray-600 text-6xl md:text-8xl font-bold drop-shadow-lg shadow-black mb-2">
            Post Blog
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
            onSubmit={(e) => handlePost(e)}
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your Name"
                value={user?.username}
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
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-orange-600 p-2 rounded-md"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogpost;
