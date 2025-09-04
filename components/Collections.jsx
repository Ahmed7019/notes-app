"use client";
import React from "react";

function Collections() {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <div className="grid grid-cols-4 gap-10 my-8">
        {arr.map((ele) => (
          <div
            key={ele}
            className={`relative before:w-16 before:h-6 before:bg-yellow-100 before:-z-10 before:border before:border-yellow-300 before:rounded-r-4xl before:rounded-l-md before:-top-3 before:left-0 before:absolute bg-yellow-200 w-40 h-30 rounded-b-4xl rounded-tr-[60%] border border-yellow-300 shadow`}
          >
            <div
              className={`w-full h-15 relative top-15 bg-yellow-400 shadow-lg backdrop-saturate-100  rounded-b-4xl`}
            >
              <div className="w-full flex items-center justify-between p-1">
                <p className="text-xs text-neutral-900 bg-neutral-50/50 rounded-4xl border border-white shadow  backdrop-blur-md  p-1">
                  Collection name
                </p>
                <p>...</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Collections;
