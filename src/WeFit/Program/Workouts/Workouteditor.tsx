import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Mock API Service
const mockWorkoutAPI = {
  fetchWorkouts: async () => {
    // Simulate fetching data
    return [
      {
        _id: "1",
        name: "Morning Cardio",
        videoLink: "https://youtube.com/example",
        description: "A great morning cardio routine.",
        startDate: "2023-12-01",
        endDate: "2023-12-31",
      },
    ];
  },
  createWorkout: async (workout: any) => {
    console.log("Created workout:", workout);
    return workout;
  },
  updateWorkout: async (workout: any) => {
    console.log("Updated workout:", workout);
    return workout;
  },
};

interface Workout {
  _id: string;
  name: string;
  videoLink: string;
  description: string;
  startDate: string;
  endDate: string;
}

export default function WorkoutEditor() {
  const { workoutId, programId } = useParams<{ workoutId: string; programId: string }>();
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [workout, setWorkout] = useState<Workout>({
    _id: new Date().getTime().toString(),
    name: "",
    videoLink: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // Fetch workouts when the component mounts
  useEffect(() => {
    const fetchWorkouts = async () => {
      const data = await mockWorkoutAPI.fetchWorkouts();
      setWorkouts(data);
    };
    fetchWorkouts();
  }, []);

  // Populate the form if editing an existing workout
  useEffect(() => {
    if (workoutId !== "new") {
      const existingWorkout = workouts.find((w) => w._id === workoutId);
      if (existingWorkout) setWorkout(existingWorkout);
    }
  }, [workoutId, workouts]);

  const saveWorkout = async () => {
    if (workoutId === "new") {
      await mockWorkoutAPI.createWorkout(workout);
    } else {
      await mockWorkoutAPI.updateWorkout(workout);
    }

    // Navigate back to the workouts list
    navigate(`/wefit/program/${programId}/workouts`);
  };

  return (
    <div className="container">
        <br />
      <h3>{workoutId === "new" ? "Adding Workout" : "Editing Workout"}</h3>
      <br/>
      <div>
        <div className="form-group mb-3">
          <label htmlFor="workout-name">Name</label>
          <input
            id="workout-name"
            value={workout.name}
            className="form-control"
            onChange={(e) => setWorkout({ ...workout, name: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="video-link">Video</label>
          <input
            id="video-link"
            value={workout.videoLink}
            className="form-control"
            onChange={(e) => setWorkout({ ...workout, videoLink: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={workout.description}
            cols={40}
            rows={5}
            className="form-control"
            onChange={(e) => setWorkout({ ...workout, description: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="start-date">From</label>
          <input
            type="date"
            id="start-date"
            value={workout.startDate}
            className="form-control"
            onChange={(e) => setWorkout({ ...workout, startDate: e.target.value })}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="end-date">To</label>
          <input
            type="date"
            id="end-date"
            value={workout.endDate}
            className="form-control"
            onChange={(e) => setWorkout({ ...workout, endDate: e.target.value })}
          />
        </div>
        <div className="d-flex justify-content-end">
          <Link to={`/wefit/program/${programId}/workouts`} className="btn btn-secondary me-2">Cancel</Link>
          <button className="btn btn-success" onClick={saveWorkout}>
            {workoutId === "new" ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
