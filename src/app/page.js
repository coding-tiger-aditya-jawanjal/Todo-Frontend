import AllTasks from "@/components/alltasks"
import AddTask from "@/components/task"


const Home = () => {
  return (
    <div className="m-10 flex justify-between items-start ">
      <AddTask/>
     <AllTasks />
    </div>
  )
}

export default Home
