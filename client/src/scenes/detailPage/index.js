import React from "react";
import { useState } from "react";


import userProfile from "../../img/userProfile.png";
import photo1 from "../..//img/photo1.jpg";
import photo2 from "../..//img/photo2.jpg";
import photo3 from "../..//img/photo3.jpg";

const photos = [photo1, photo2, photo3];

function ScrollPhotos({ currentImage, setCurrentImage }) {
  const handlePhoto = (photo) => {
    setCurrentImage(photo);
  };

  return (
    <div className="photo-container">
      <div className="photo-list">
        {photos.map((photo, index) => (
          <img
            src={photo}
            alt={"photo" + (index + 1)}
            className={`photo ${currentImage === photo ? "current-image" : ""}`}
            onClick={() => handlePhoto(photo)}
          />
        ))}
      </div>
    </div>
  );
}

function PhotoDetails({ currentImage }) {
  const [zoomedPhoto, setZoomedPhoto] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleZoom = (photo) => {
    setZoomedPhoto(photo);
  };

  const handleLike = () => {
    setLiked(!liked);
    setShowNotification(!showNotification);
  };

  const handleZoomClose = () => {
    setZoomedPhoto(null);
  };

  return (
    <div className="photo-details">
      <img src={currentImage} alt="1" onClick={() => handleZoom({ photo1 })} />
      {zoomedPhoto !== null && (
        <div className="zoomed-photo">
          <img src={currentImage} alt="Zoomed" onClick={handleZoomClose} />
          <button className="zoom-close-button" onClick={handleZoomClose}>
            X
          </button>
        </div>
      )}
      <button
        className={`like-button ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        ❤
      </button>
      {showNotification && (
        <div className={`notification ${showNotification ? "fade-out" : ""}`}>
          Added to favorites
        </div>
      )}
    </div>
  );
}

function InfoWrapper() {
  return (
    <div className="info-wrapper">
      <SellerWrapper />
      <ProductInfo />
      <div className="seller-contact">Seller Contact</div>
    </div>
  );
}

function SellerWrapper() {
  return (
    <div className="seller-wrapper">
      <div className="seller-name">Seller Name</div>
      <SellerPhotoWrapper />
    </div>
  );
}

function SellerPhotoWrapper() {
  return (
    <div className="seller-photo">
      <img src={userProfile} alt="User" />
      ⭐⭐⭐⭐
    </div>
  );
}

function ProductInfo() {
  return (
    <>
      <div className="product-info">
        <h1>Product Title</h1>
        <h2>Price</h2>
      </div>
      <div className="product-description">
        <b>Description of the product : </b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        faucibus at libero et convallis. Proin vel aliquam justo. Nullam eget
        congue dolor. Curabitur tristique, nunc quis viverra dignissim, orci
        nibh pharetra enim, at eleifend nisi odio aliquet ex. Suspendisse
        tincidunt et ex ut consequat. Ut pretium velit risus. Nulla ut tempor
        erat, sed facilisis massa. Quisque bibendum sed elit ut tincidunt.
        Integer in rutrum nunc, quis tempor lacus. Morbi iaculis libero suscipit
        turpis tempus, fringilla suscipit sem aliquet. Nulla lacus urna, rutrum
        in pharetra non, luctus sed sem. Sed tincidunt lacus quis pharetra
        bibendum. Mauris sed congue lorem, a ornare elit. Nunc turpis odio,
        sagittis sed bibendum ac, consectetur in augue. Curabitur ultrices
        sollicitudin rutrum. Pellentesque et diam enim. Aenean placerat ipsum at
        maximus fringilla. Duis quis ultrices dolor. Donec sodales felis vitae
        quam ornare ullamcorper. Ut non pretium felis. Cras dui ligula,
        scelerisque ut condimentum id, rhoncus at leo. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        urna augue, aliquam et iaculis sit amet, lobortis eget mauris. Cras sed
        suscipit est. Nullam in ligula nibh. Duis at nulla massa. Morbi nec
        luctus ante. Proin tempor et metus a rhoncus. Suspendisse tristique,
        augue a efficitur mollis, nibh lectus aliquet lorem, sit amet dapibus
        justo velit sit amet enim. Duis convallis venenatis dolor at sodales.
        Suspendisse mattis fringilla nisl rhoncus tristique. Praesent hendrerit
        ornare diam, nec hendrerit mi elementum vitae. Nullam sagittis ante in
        arcu varius commodo. Aenean id neque fermentum, eleifend dui finibus,
        convallis tortor.
      </div>
    </>
  );
}

export default function DetailPage() {
  const [currentImage, setCurrentImage] = useState(photo1);

  return (
    <div className="detailPage">
    
      <div className="content-wrapper">
        <ScrollPhotos
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
        <PhotoDetails currentImage={currentImage} />
        <InfoWrapper />
      </div>
      
    </div>
  );
}