import Aos from "aos";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "../css/addeditblog.scss";

const initialState = {
  title: "",
  author: "",
  description: "",
  category: "",
  imageUrl: "",
};

const options = ["Cats", "Lions", "Tigers", "Horses", "Dogs", "Pets"];

export default function AddEditBlog() {
  const [formValue, setFormValue] = useState(initialState);
  const [categoryErrMsg, setCategoryErrMsg] = useState(null);
  const [editBlog, setEditBlog] = useState(false);
  const { title, author, description, category, imageUrl } = formValue;

  const { id } = useParams();
  const navigate = useHistory();

  // image validation when we're not on edit mode
  const imageValidation = !editBlog ? imageUrl : true;

  // USEEFFECT FOR EDITBLOG
  useEffect(() => {
    if (id) {
      setEditBlog(true);
      getSingleBlog(id);
      Aos.init({ duration: 2000 });
    } else {
      setEditBlog(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  // FETCHING SINGLE BLOG BASED ON ID
  const getSingleBlog = async (id) => {
    const singleBlog = await axios.get(`http://localhost:5000/blogs/${id}`);

    if (singleBlog.status === 200) {
      setFormValue({ ...singleBlog.data });
    } else {
      toast.error("Something Went Wrong");
    }
  };

  // Getting The Current Date
  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyy;
    return today;
  };

  // ON SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      setCategoryErrMsg("Please Select a Category");
    }

    if (title && description && category && imageUrl) {
      // ADDING THE FORM DATA TO API WITH DATE
      if (!editBlog) {
        const currentDate = getDate();
        const updatedBlogData = { ...formValue, date: currentDate };

        const response = await axios.post(
          "http://localhost:5000/blogs",
          updatedBlogData
        );
        if (response.status === 201) {
          alert("Blog Created Successfully");
          // toast.success("Blog Created Successfully");
          console.log("Blog Uploaded Successfully");
        } else {
          toast.error("Something Went Wrong");
        }
        setFormValue({
          title: "",
          author: "",
          description: "",
          category: "",
          imageUrl: "",
        });
        navigate.push("/");

        // UPDATING THE FORMVALUE WITHOUT IMAGE AND DATE
      } else {
        const response = await axios.put(
          `http://localhost:5000/blogs/${id}`,
          formValue
        );
        if (response.status === 200) {
          alert("Blog Updated Successfully");
          // toast.success("Blog Updated Successfully");
          console.log("Blog Updated Successfully");
        } else {
          toast.error("Something Went Wrong");
        }
        setFormValue({
          title: "",
          author: "",
          description: "",
          category: "",
          imageUrl: "",
        });
        navigate.push("/");
      }
    }
  };

  // ON INPUT CHANGE
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  // ON IMAGE UPLOAD
  const onUploadImage = (file) => {
    // console.log("files", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "spxrjisr");
    axios
      .post("http://api.cloudinary.com/v1_1/dfr5duntu/image/upload", formData)
      .then((resp) => {
        // console.log("Response", resp);
        alert("Image Uploaded Successfully");
        // toast.info("Image Uploaded Successfully");
        setFormValue({ ...formValue, imageUrl: resp.data.url });
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // ON CATEGORY CHANGE
  const onCategoryChange = (e) => {
    setCategoryErrMsg(null);
    setFormValue({ ...formValue, category: e.target.value });
  };

  return (
    <>

      <div class="container form-cont" data-aos="zoom-out-up">
        <form class="form-block" onSubmit={handleSubmit}>
          <a class="singup">{editBlog ? "Update Your Blog" : "Add New Blog"}</a>
          <div class="inputBox1">
            <input
              type="text"
              name="title"
              value={title}
              required
              onChange={onInputChange}
            />
            <span class="user">Title</span>
          </div>

          <div class="inputBox1">
            <input
              type="text"
              name="author"
              value={author}
              required
              onChange={onInputChange}
            />
            <span class="user">Author</span>
          </div>

          <div class="inputBox">
            <textarea
              rows={6}
              cols={30}
              name="description"
              type="text"
              value={description}
              onChange={onInputChange}
              required
            />
            <span>Description</span>
          </div>

          {!editBlog && (
            <div class="inputBox">
              <input
                type="file"
                required
                onChange={(e) => onUploadImage(e.target.files[0])}
              />
            </div>
          )}
          <div class="inputBox">
            <select
              className="categoryDropDown"
              onChange={onCategoryChange}
              value={category}
            >
              <option hidden>Select any category</option>
              {options.map((option, index) => (
                <option value={option || ""} key={index}>
                  {option}
                </option>
              ))}
            </select>
            {categoryErrMsg && <p>{categoryErrMsg}</p>}
          </div>

          <div className="action-btn">
            <button class="enter">
              {editBlog ? "Update Blog" : "Add New Blog"}
            </button>
            <br></br>
            <button class="enter" onClick={() => navigate.push("/")}>
              Go Back
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
