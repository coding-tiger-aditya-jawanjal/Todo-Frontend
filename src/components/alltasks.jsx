const AllTasks = () => {
  return (
    <div className="flex flex-col">
        <h3 className=" text-2xl font-black mb-6">Latest Task :-</h3>
      <div className="flex w-96 h-auto py-2 px-4 justify-between bg-slate-200  items-center">
        <h4 className=" overflow-x-hidden mr-4 ">Expand the Title Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem praesentium nostrum at voluptates laborum illo culpa doloribus autem nobis..</h4>
      </div>
      <div className="w-96 h-auto border-b-2 py-2 border-slate-600">
        <p className="mb-5 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          similique consectetur nisi dicta consequuntur temporibus rem
          architecto doloremque mollitia in? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem dolor adipisci, maxime ipsam
          voluptates aut quas aperiam voluptas quaerat blanditiis iusto, numquam
          dolores nulla odit ut, sint atque laborum soluta!
        </p>
        <div className="flex justify-end ">
          <button className="  bg-blue-300 hover:cursor-pointer hover:bg-slate-200 px-3 py-1 mr-2">
            Update
          </button>
          <button className=" bg-blue-300 hover:cursor-pointer hover:bg-slate-200 px-4 py-1">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
