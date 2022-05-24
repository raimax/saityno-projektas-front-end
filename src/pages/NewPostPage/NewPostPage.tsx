import { useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import "./NewPostPage.scss";

const NewPostPage = () => {
  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState<string>("");

	const AddNewPostAsync = () => {
		
	}

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
            <button onClick={AddNewPostAsync} type="button" className="button-success">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPostPage;
