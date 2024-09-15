// import React from "react";
import { ConvertTime } from "../utils/format";
import PropTypes from "prop-types";

const CardNotes = ({ data, delate, archive }) => {
  return (
    <div className="flex flex-col w-full h-full  border border-black rounded-md">
      <div className="p-4 flex flex-col h-full w-full">
        <div className="text-2xl font-bold line-clamp-1 w-full">{data.title}</div>
        <div className="mt-2 text-base">{ConvertTime(data.createAt)}</div>
        <div className="text-base text-pretty w-full font-semibold mt-3">{data.body}</div>
      </div>
      <div className="flex flex-row justify-between w-full border-t border-black ">
        <button
          onClick={() => delate(data.id)}
          className="border-r border-black w-[50%] text-red-500 py-2"
        >
          Delete
        </button>
        <button onClick={() => archive(data.id)} className="w-[50%] text-yellow-500 py-2">
          {data.archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

CardNotes.propTypes = {
  data: PropTypes.array,
  delate: PropTypes.func,
  archive: PropTypes.func,
};

export default CardNotes;
