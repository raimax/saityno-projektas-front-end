import { useEffect, useRef, useState } from "react";
import "./ImageUpload.scss";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageUpload = ({ image }) => {
  const productImageUpload = useRef();
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const OnImageSelect = () => {
    if (productImageUpload.current.files[0]) {
      image(productImageUpload.current.files[0]);
      setFile(productImageUpload.current.files[0]);
      setPreview(URL.createObjectURL(productImageUpload.current.files[0]));
    }
  };

  useEffect(() => {
    if (image == null && preview !== null) {
      setPreview(null);
    }
  }, [image, preview]);

  const RemovePreview = () => {
    image(null);
    setPreview(null);
  };

  if (preview) {
    return (
      <div className="image-upload_preview">
        <div className="image-upload_preview_image_container">
          <img
            className="image-upload_preview_image"
            src={preview}
            alt="product-preview"
          />
        </div>

        <div className="preview__image__info">
          <div className="image__info__name">{file.name}</div>
          <div className="image__info__size">
            {(file.size / 1000).toFixed(2)} Kb
          </div>
          <div onClick={RemovePreview} className="image-upload__preview__close">
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => productImageUpload.current.click()}
      className="image-upload"
    >
      <FontAwesomeIcon icon={faImage} />
      <span className="image-upload__desc1">
        Click here to browse for an image
      </span>
      <span className="image-upload__desc2">Maximum image file size: 5MB</span>
      <input
        onChange={OnImageSelect}
        ref={productImageUpload}
        name="productImageUpload"
        type="file"
        accept="Image/*"
      />
    </div>
  );
};

export default ImageUpload;
