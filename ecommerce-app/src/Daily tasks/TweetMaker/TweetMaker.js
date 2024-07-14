import React, { useState } from "react";
import { MdOutlineVerified } from "react-icons/md";
import { toPng } from "html-to-image";
import download from "downloadjs";
import "./TweetMaker.css";

const TweetMaker = () => {
  const [handleName, setHandleName] = useState("");
  const [userName, setUserName] = useState("");
  const [tweetContent, setTweetContent] = useState("");
  const [verified, setVerified] = useState(false);
  const [tweetImage, setTweetImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const handleProfileImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTweetImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTweetImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownload = () => {
    const node = document.getElementById("tweet-preview");
    toPng(node)
      .then((dataUrl) => {
        download(dataUrl, "tweet-preview.png");
      })
      .catch((error) => {
        console.error("Error generating image:", error);
      });
  };

  return (
    <>
      <div className="tweet-maker">
        <div className="tweet-caption">
          <div className="profile-image-upload">
            <p>Upload Profile Picture</p>
            <input type="file" onChange={handleProfileImage} accept="image/*" />
          </div>
          <input
            type="text"
            placeholder="Handle Name"
            value={handleName}
            onChange={(e) => setHandleName(e.target.value)}
          />

          <p>Is this verified profile?</p>
          <input
            type="checkbox"
            checked={verified}
            onChange={(e) => setVerified(e.target.checked)}
          />
          <textarea
            rows={2}
            placeholder="Tweet Content"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
          />
          <div className="tweet-image-upload">
            <input type="file" onChange={handleTweetImage} accept="image/*" />
          </div>
        </div>
        <div id="tweet-preview" className="tweet-preview">
          <div className="profile-section">
            <div>
              {profileImage && (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              )}
            </div>
            <div className="user-name">
              <p>{handleName}</p>
            </div>
            <div className="verified">{verified && <MdOutlineVerified />}</div>
          </div>
          <div className="tweet-content">
            <p>{tweetContent}</p>
            {tweetImage && (
              <img src={tweetImage} alt="Tweet" className="tweet-image" />
            )}
          </div>
        </div>
      </div>
      <button onClick={handleDownload}>Download Tweet as Image</button>
    </>
  );
};

export default TweetMaker;
