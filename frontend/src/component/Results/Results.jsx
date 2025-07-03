import React, { useState, useEffect, useContext } from "react";
import { Calendar, Clock, Tag, Edit2, Check } from "lucide-react";
import styles from "./Results.module.css";
import Button from "../button/button";
import { ApiAddEventGoogle, ApiSaveTask } from "../../API/Api";
import { userContext } from "../../Context/createContext";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";

const Results = ({ output }) => {
  const [deadlineData, setDeadlineData] = useState({
    topic: false,
    date: false,
    time: false,
  });

  const [loader, setLoader] = useState(false);
  const { user } = useContext(userContext);

  const [isEditing, setIsEditing] = useState({
    topic: false,
    date: false,
    time: false,
  });

  useEffect(() => {
    try {
      if (output) {
        let parsedOutput = output;

        if (typeof output === "string") {
          parsedOutput = JSON.parse(output.replace(/'/g, '"'));
        }

        if (Array.isArray(parsedOutput) && parsedOutput.length === 3) {
          const [topic, date, time] = parsedOutput;
          setDeadlineData({
            topic: topic || "No topic found",
            date: date || "No date found",
            time: time || "No time found",
          });
        }
      }
    } catch (error) {
      console.error("Error parsing output:", error);
    }
  }, [output]);

  const handleEdit = (field) => {
    setIsEditing({
      ...isEditing,
      [field]: true,
    });
  };

  const handleSave = (field) => {
    setIsEditing({
      ...isEditing,
      [field]: false,
    });
  };

  const handleChange = (field, value) => {
    setDeadlineData({
      ...deadlineData,
      [field]: value,
    });
  };

  const renderField = (field, Icon, label) => {
    return (
      <div className={styles.infoItem}>
        <div className={styles.iconWrapper}>
          <Icon size={20} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.label}>{label}</div>
          {isEditing[field] ? (
            <div className={styles.editField}>
              <input
                type="text"
                value={deadlineData[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                className={styles.input}
                autoFocus
              />
              <button
                onClick={() => handleSave(field)}
                className={styles.button}
                aria-label={`Save ${label}`}
              >
                <Check size={18} />
              </button>
            </div>
          ) : (
            <div className={styles.value}>
              {deadlineData[field]}
              <button
                onClick={() => handleEdit(field)}
                className={styles.button}
                aria-label={`Edit ${label}`}
              >
                <Edit2 size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleSubmit = async () => {
    setLoader(true);

    // save the task to databse
    const response = await ApiSaveTask(user._id, deadlineData);
    if (response?.status >= 210) {
      let errorMessage = response.data.message || "could not add the task";
      toast.error(errorMessage);
    } else {
      let successMessage = response.data.message || "Invalid response";
      toast.success(successMessage);
    }

    // add event to goole calnder
    const addEventToCalander = await ApiAddEventGoogle(deadlineData);
    if(addEventToCalander.status >= 210){
      toast.error(addEventToCalander.data.message);
    }
    else{
      toast.success(addEventToCalander.data.message || "sucessfully added to google Calendar");
    }
    setLoader(false);
  };

  return (
    <>
      {loader && <Loader></Loader>}
      <div className={styles.container}>
        {output ? (
          <div className={styles.resultsCard}>
            <h2 className={styles.cardTitle}>Extracted Information</h2>
            {renderField("topic", Tag, "Topic")}
            {renderField("date", Calendar, "Deadline")}
            {renderField("time", Clock, "Time")}
          </div>
        ) : (
          <div className={styles.emptyState}>
            Process an image or text to see results
          </div>
        )}

        <Button text="Add the task to google Calendar" onClick={handleSubmit}></Button>
      </div>
    </>
  );
};

export default Results;
