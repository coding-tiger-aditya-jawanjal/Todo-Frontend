"use client";

const AddTask = () => {
  return (
    <div className=" flex flex-col justify-center m-8">
      <h2 className=" text-amber-700 text-center text-4xl font-bold">
        Add New Task
      </h2>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter Title..."
        className=" w-96 mt-10 h-14 text-md px-2 py-1 border-red-500 border-2 outline-none"
      />
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="5"
        placeholder="Enter Description..."
        className="px-2 py-1 border-red-500 border-2 outline-none mt-5"
      ></textarea>
      <button
        type="submit"
        className="mt-5 bg-green-300 hover:bg-slate-200 hover:cursor-pointer h-10"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
