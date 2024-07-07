import React, { useState } from "react";
import {
  BsEmojiAngry,
  BsEmojiFrown,
  BsEmojiExpressionless,
  BsEmojiSmile,
  BsEmojiWink,
} from "react-icons/bs";
import { ImCross } from "react-icons/im";
import "./customModal.css";

const CustomModal = ({ show, close }) => {
  const [enableButton, setEnableButton] = useState(true);
  const [selectedEmoji, setSelectedEmoji] = useState('');

  const selectEmojis = (emoji) => {
    setSelectedEmoji(emoji);
    setEnableButton(false);
  };

  return (
    <div>
      {show && (
        <div className="modal-backdrop">
          <div className="modal">
            <div className="topRow">
              <div>Rate your experience</div>
              <ImCross className="modal-close" onClick={close} />
            </div>
            <div className="emojiDiv">
              <div
                className={selectedEmoji === "angry" ? "selected" : ""}
                onClick={() => selectEmojis("angry")}
              >
                <BsEmojiAngry />
                <p>Angry</p>
              </div>
              <div
                className={selectedEmoji === "frown" ? "selected" : ""}
                onClick={() => selectEmojis("frown")}
              >
                <BsEmojiFrown />
                <p>Sad</p>
              </div>
              <div
                className={selectedEmoji === "expressionless" ? "selected" : ""}
                onClick={() => selectEmojis("expressionless")}
              >
                <BsEmojiExpressionless />
                <p>Meh</p>
              </div>
              <div
                className={selectedEmoji === "smile" ? "selected" : ""}
                onClick={() => selectEmojis("smile")}
              >
                <BsEmojiSmile />
                <p>Okay</p>
              </div>
              <div
                className={selectedEmoji === "wink" ? "selected" : ""}
                onClick={() => selectEmojis("wink")}
              >
                <BsEmojiWink />
                <p>Excellent</p>
              </div>
            </div>
            <button disabled={enableButton} onClick={close}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
