import AllTasks from "@/components/alltasks"
import AddTask from "@/components/task"


const Home = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-center overflow-x-none items-center md:items-start ">
      <div className="mr-5 mb-5  ">
      <AddTask/>
     </div>
     <div >
     <AllTasks />
     </div>
    </div>
  )
}

export default Home
