import { useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import axiosConfig from "../../helpers/axiosConfig";
import "./NewPostPage.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const NewPostPage = () => {
  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const AddNewPostAsync = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("userId", "1");
    formData.append("imageFile", image, image.name);

    await axiosConfig
      .post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        ResetInputs();
        toast(response.data);
      })
      .catch((error) => {
        toast(error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const ResetInputs = () => {
    setImage(null);
    setTitle("");
  };

  return (
    <div className="new-post-page">
      <Loader text="Please wait..." isLoading={loading} />
      <ToastContainer theme="dark" />
      <div className="image-upload-container">
        <form>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setTitle(event.currentTarget.value)}
            value={title}
          />
          <ImageUpload image={setImage} reset={image} />
          <div className="image-upload_button-container">
            <button
              onClick={AddNewPostAsync}
              type="button"
              className="button-success"
              disabled={loading}
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
