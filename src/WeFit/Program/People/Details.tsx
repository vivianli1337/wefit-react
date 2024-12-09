import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

interface Workout {
  name: string;
  completed: boolean;
}

interface UserDetailsProps {
  user: {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    role: string;
    completedWorkouts: Workout[];
  };
  onClose: () => void;
}

export default function PeopleDetails({ user, onClose }: UserDetailsProps) {
  const [editing, setEditing] = useState(false); // Editing mode toggle
  const [name, setName] = useState(`${user.firstName} ${user.lastName}`); // For editing the name
  const [gender, setGender] = useState(user.gender); // For editing the gender
  const [role, setRole] = useState(user.role); // For editing the role

  const saveUser = () => {
    // Handle save logic here if needed
    setEditing(false);
  };

  return (
    <div className="wd-people-details position-fixed top-50 start-50 translate-middle bg-white p-4 shadow rounded w-50">
      {/* Close Button */}
      <button onClick={onClose} className="btn position-absolute top-0 end-0">
        <IoCloseSharp className="fs-1" />
      </button>

      {/* User Avatar */}
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary fs-1" />
      </div>
      <hr />

      {/* Editable Name */}
      <div className="text-danger fs-4 wd-name">
        {!editing ? (
          <div>
            {user.firstName} {user.lastName}
            <FaPencil
              onClick={() => setEditing(true)}
              className="float-end fs-5 mt-2 wd-edit"
            />
          </div>
        ) : (
          <input
            className="form-control w-75 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && saveUser()}
          />
        )}
      </div>

      {/* Username */}
      <b>Username:</b> <span className="wd-username">{user.username}</span>
      <br />

      {/* Gender */}
      <b>Gender:</b>
      {!editing ? (
        <span className="ms-2">{user.gender}</span>
      ) : (
        <select
          className="form-select w-75"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      )}
      <br />

      {/* Role */}
      <b>Role:</b>
      {!editing ? (
        <span className="ms-2">{user.role}</span>
      ) : (
        <select
          className="form-select w-75"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="Member">Member</option>
          <option value="Trainer">Trainer</option>
        </select>
      )}
      <hr />

      {/* Completed Workouts */}
      <h5>Completed Workouts</h5>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Workout</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.completedWorkouts.map((workout, index) => (
            <tr key={index}>
              <td>{workout.name}</td>
              <td>
                {workout.completed ? (
                  <FaCheck className="text-success" />
                ) : (
                  <span className="text-danger">Incomplete</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />

      {/* Action Buttons */}
      {editing && (
        <button onClick={saveUser} className="btn btn-success float-end wd-save">
          Save
        </button>
      )}
      <button onClick={onClose} className="btn btn-secondary float-start me-2 wd-cancel">
        Close
      </button>
    </div>
  );
}
