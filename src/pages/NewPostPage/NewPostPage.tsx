import { useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import axiosConfig from "../../helpers/axiosConfig";
import "./NewPostPage.scss";

const NewPostPage = () => {
  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState<string>("");

  const AddNewPostAsync = async () => {
    const data: NewPost = {
      title: title,
      image: "image",
      user: {
        id: 1,
        username: "",
      },
    };
    await axiosConfig
      .post("/posts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="new-post-page">
      <div className="image-upload-container">
        <form>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setTitle(event.currentTarget.value)}
            value={title}
          />
          <ImageUpload image={setImage} />
          <div className="image-upload_button-container">
            <button
              onClick={AddNewPostAsync}
              type="button"
              className="button-success"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
