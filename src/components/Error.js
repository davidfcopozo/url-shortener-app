import React from "react";

const Error = ({ error }) => {
  const handleClose = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("btn") ||
      e.target.classList.contains("btn-close")
    ) {
      let modal = document.querySelector(".modal");
      modal.classList.toggle("modal-close");
    }
  };

  return (
    <>
      <div
        className="modal"
        id="modal-one"
        aria-hidden="true"
        onClick={handleClose}
      >
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>An error has occured:</h2>
            <a href="#" className="btn-close" aria-hidden="true">
              ×
            </a>
          </div>
          <div className="modal-body">
            <p>{error}</p>
          </div>
          <div className="modal-footer">
            <a href="#" className="btn">
              Nice!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
