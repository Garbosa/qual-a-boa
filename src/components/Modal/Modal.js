import React from "react";
import FeedItemDetail from "../../pages/FeedtemDetail/FeedItemDetail";
import "./Modal.css";

function Modal({ closeModal, opened, data }) {

  !opened && <></>
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <FeedItemDetail modalInfo={data}/>
      </div>
    </div>
  );
}

export default Modal;
