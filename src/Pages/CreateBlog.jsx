import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function CreateBlog() {
  const [formValue, setFormValue] = useState({
    title: "",
    category: "",
    description: "",
    author: "",
    imageurl: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleFormValueChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleImageUpload = async (file) => {
    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "spxrjisr");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfr5duntu/image/upload",
        formData
      );
      const uploadedImageUrl = response.data.secure_url;
      toast.success("Image Uploaded Successfully");

      setFormValue((prev) => ({ ...prev, imageurl: uploadedImageUrl }));
    } catch (error) {
      toast.error("Image Upload Failed: " + error.message);
      console.error("Upload Error:", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (uploadingImage) {
      toast.error("Please wait for the image to finish uploading.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://67a21f98409de5ed5254601b.mockapi.io/animals",
        formValue,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Submitted Successfully!");
        setSuccess("Submitted Successfully");

        setFormValue({
          title: "",
          category: "",
          description: "",
          author: "",
          imageurl: "",
          createdAt: new Date().toISOString().split("T")[0],
        });
      }
    } catch (err) {
      setError("Something Went Wrong");
      toast.error("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="wrapper_blog_post">
        <div>
          <h3>Create A New Blog Post</h3>
          <form onSubmit={handleOnSubmit}>
            <div className="form_group">
              <input
                type="text"
                placeholder="Title"
                value={formValue.title}
                name="title"
                required
                onChange={handleFormValueChange}
              />
            </div>
            <div className="form_group">
              <select
                name="category"
                value={formValue.category}
                onChange={handleFormValueChange}
                required
              >
                <option hidden>Select a Category</option>
                <option value="Lion">Lion</option>
                <option value="Cats">Cats</option>
                <option value="Tigers">Tigers</option>
                {/* <option value=""></option> */}
              </select>
            </div>
            <div className="form_group">
              <input
                required
                type="text"
                value={formValue.author}
                placeholder="Author"
                name="author"
                onChange={handleFormValueChange}
              />
            </div>
            <div className="form_group">
              <textarea
                name="description"
                cols="30"
                rows="10"
                value={formValue.description}
                placeholder="Description"
                onChange={handleFormValueChange}
              ></textarea>
            </div>
            <div className="form_group">
              <input
                type="file"
                name="imageurl"
                onChange={(e) => handleImageUpload(e.target.files[0])}
              />
            </div>
            <button type="submit" disabled={loading || uploadingImage}>
              {loading
                ? "Submitting..."
                : uploadingImage
                ? "Wait!!... Uploading Image"
                : "Create Post"}
            </button>
          </form>

          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
