import { DecimationAlgorithm } from "chart.js";
import React from "react";
import { FaDigitalTachograph } from "react-icons/fa";

const CategoryModal = ({ categoryOpen, close }) => {
  return (
    <dialog className="modal" open={categoryOpen}>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="modal-box">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={close}
          >
            x
          </button>
          <div>
            <input
              type="text"
              placeholder="category name"
              className="w-full max-w-xs input input-bordered input-primary"
            />
          </div>
          <div>
            <form method="dialog">
              <button className="btn">Add Category</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CategoryModal;
