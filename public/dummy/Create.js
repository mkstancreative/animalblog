import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [bimage, setBimage] = useState();
  const [isAdding, setIsAdding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author, date, bimage };

    setIsAdding(true);

    setTimeout(() => {
      fetch("https://63ee0369d466e0c18ba77ab1.mockapi.io/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("New Blog Added Successfully");
        setIsAdding(false);

        history.push("/");
      });
    }, 1000);

    console.log(blog);

    setTitle("");
    setBody("");
    setAuthor("");
    setBimage("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter the Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Write your Post</label>
        <input
          type="text"
          placeholder="Write your Post"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Author</label>
        <input
          type="text"
          placeholder="Enter the Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Date</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="imgs">Image</label>
        <input
          id="imgs"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(event) => setBimage(event.target.files)}
        />
        {!isAdding && <button>Submit</button>}
        {isAdding && <button>Adding Blog.....</button>}

        {/* {blog && <h1>{blog}</h1>} */}
      </form>
    </div>
  );
}

export default Create;
