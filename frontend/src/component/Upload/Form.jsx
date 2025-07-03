import { useContext, useState } from "react";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import { userContext } from "../../Context/createContext";


function AddTask({ output }) {
  const [taskDetail, setTaskDetail] = useState({
    topic: "",
    date: "",
    time: "00:00",
  });
  const [loader, setLoader] = useState(false);
  const {user} = useContext(userContext);

  const inputValidation = () => {
    return taskDetail.topic === "" || taskDetail.date === "";
  };

  const handleTask = (e) => {
    const { name, value } = e.target;
    setTaskDetail((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!user){
           toast.error("please login or Signup to use our services");
           return;
        }
        setLoader(true);
          const [year, month, day] = taskDetail.date.split("-");
  const formattedDate = `${day}-${month}-${year}`;

    const task = [taskDetail.topic, formattedDate, taskDetail.time];
     console.log(task);
    output(task);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    toast.success("details generated");
  };

  return (
    <>

      <div className="container py-4">
      {loader && <Loader></Loader>}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <h5 className="card-title mb-4">Add Task</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="topic" className="form-label">
                  Topic
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="topic"
                  name="topic"
                  value={taskDetail.topic}
                  onChange={handleTask}
                  placeholder="Enter task topic"
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="date" className="form-label">
                    Deadline
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={taskDetail.date}
                    onChange={handleTask}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="time" className="form-label">
                    Time (Optional)
                  </label>
                  <input
                    type="time"
                    className="form-control"
                    id="time"
                    name="time"
                    value={taskDetail.time || ""}
                    onChange={handleTask}
                  />
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary px-4"
                  disabled={inputValidation()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddTask;
