import styles from "./Tasks.module.css";
import { userContext } from "../../Context/createContext";
import { useEffect, useContext, useState } from "react";
import { ApiGetTasks } from "../../API/Api";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(userContext);

  const taskData = async () => {
    setLoading(true);
    try {
      const response = await ApiGetTasks(user._id);
      if (response?.status === 200) {
        setTasks(response.data);
      } else {
        toast.error("Server Error. Unable to fetch Information");
      }
    } catch (error) {
      toast.error("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  // Only used for ISO formatted dates like createdAt
  const formatDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; // DD/MM/YYYY
  };


  const  handleDeleteTask = (id) =>{
        console.log(id);
  }

  useEffect(() => {
    if (user?._id) {
      taskData();
    }
  }, [user]);

  if (loading) return <Loader />;

  return (
    <>
      <h1 className={styles.h1}>My Tasks</h1>
      <div className={styles.alerts}>
        <div className="alert alert-danger" role="alert">
    {/* <span className={styles.bold}>Note:</span> Removing a task from here will also delete it from your Google Calendar if it exists.  */}
    Note: The delete feature is currently in progress and will be available soon!
</div>
</div>
      {tasks.length === 0 ? (
        <div className={styles.noTasks}>
          <p>No tasks found. Create your first task!</p>
        </div>
      ) : (
        <div className={styles.tasksContainer}>
          <table className={styles.tasksTable}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>Task Title</th>
                <th>Deadline</th>
                <th>Time</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id} className={styles.tableRow}>
                  <td className={styles.tableCell}>
                    <h3 className={styles.taskTitle}>{task.title}</h3>
                  </td>

                  {/* ✅ deadline is already in DD-MM-YYYY format */}
                  <td className={styles.tableCell}>
                    <span className={styles.taskDeadline}>
                      {task.deadline || "No deadline"}
                    </span>
                  </td>

                  <td className={styles.tableCell}>
                    <span className={styles.taskTime}>
                      {task.time || "No time"}
                    </span>
                  </td>

                  {/* ✅ createdAt needs formatting */}
                  <td className={styles.tableCell}>
                    <span className={styles.taskCreated}>
                      {formatDate(task.createdAt)}
                    </span>
                  </td>

                  <td className={`${styles.tableCell} ${styles.deleteCell}`}>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDeleteTask(task._id)}
                      title="Delete task"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Tasks;
