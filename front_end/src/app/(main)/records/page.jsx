"use client";

import AddRecord from "@/app/components/addRecord";
import RecordList from "@/app/components/recordList";
import { DashboardContext } from "@/app/context/dashboard-context";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

const RecordPage = () => {
  const { categories } = useContext(DashboardContext);

  return (
    <div className="flex max-w-[2000px] mx-auto mt-8 gap-6">
      <div className="w-[282px] flex flex-col px-4 py-6 bg-white rounded-xl gap-6">
        <h3>Records</h3>
        <button
          className="btn btn-info bg-[#0166FF] text-white rounded-5 py-1 text-base h-8"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          +Add
        </button>
        <AddRecord />
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
        />
        <div>
          {" "}
          Type
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <span className="label-text">All</span>
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="default"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <span className="label-text">Income</span>
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="retro"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer gap-4">
              <span className="label-text">Expense</span>
              <input
                type="radio"
                name="theme-radios"
                className="radio theme-controller"
                value="cyberpunk"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-semibold text-[#1F2937]">Category</p>
          <button className="text-base font-semibold text-[#1F2937] opacity-20">
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {categories?.map((cat) => (
            <div className="flex gap-2 items-center">
              <IoMdEye size={20} />
              <p className="text-base text-[#1F2937]">{cat?.name}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <IoIosAdd size={20} />
          <button className="text-base text-[#1F2937]">Add Category</button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <div>last30days</div>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Newest first
            </option>
            <option>Ladies first</option>
            <option>Men</option>
          </select>
        </div>
        <div className="w-full ">
          <p className="mb-3">Today</p>
          <RecordList />
        </div>
      </div>
    </div>
  );
};

export default RecordPage;
