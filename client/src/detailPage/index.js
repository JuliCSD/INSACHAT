import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import userProfile from "../img/userProfile.png";

import img11 from "../img/1/1.jpg";
import img12 from "../img/1/2.jpg";
import img13 from "../img/1/3.jpg";

import img21 from "../img/2/1.jpg";
import img22 from "../img/2/2.jpg";
import img23 from "../img/2/3.jpg";




function ScrollPhotos({ currentImage, setCurrentImage, photolist }) {
  const handlePhoto = (photo) => {
    setCurrentImage(photo);
  };

  return (
    <div className="photo-container">
      <div className="photo-list">
        {photolist.map((photo, index) => (
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
      <img src={currentImage} alt="1" onClick={() => handleZoom({ currentImage })} />
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

function InfoWrapper( {id}) {
  return (
    <div className="info-wrapper">
      <SellerWrapper />
      <ProductInfo />
      <div className="seller-contact">Seller {id}</div>
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
  
      </div>
    </>
  );
}

export default function DetailPage({ }) {
  const { id } = useParams();
  if(id == 1){
    var img1 = img11;
    var img2 = img12;
    var img3 = img13;
  }
  else if(id == 2){
    var img1 = img21;
    var img2 = img22;
    var img3 = img23;
  }
  const photos = [img1, img2, img3];


  const [currentImage, setCurrentImage] = useState(img1);

  return (
    <div className="detailPage">
    
      <div className="content-wrapper">
        <ScrollPhotos
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          photolist = {photos}
        />
        <PhotoDetails currentImage={currentImage} />
        <InfoWrapper id = {id} />
      </div>
      
    </div>
  );
}