import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";

interface Workout {
  name: string;
  completed: boolean;
}

interface Member {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  role: string;
  lastExercise: string;
  completedWorkouts: Workout[];
}

const initialMembers: Member[] = [
  {
    id: "1",
    username: "john_doe",
    firstName: "John",
    lastName: "Doe",
    gender: "Male",
    role: "Trainer",
    lastExercise: "Push-Ups",
    completedWorkouts: [
      { name: "Push-Ups", completed: true },
      { name: "Pull-Ups", completed: false },
      { name: "Squats", completed: true },
    ],
  },
  {
    id: "2",
    username: "jane_smith",
    firstName: "Jane",
    lastName: "Smith",
    gender: "Female",
    role: "Trainee",
    lastExercise: "Squats",
    completedWorkouts: [
      { name: "Push-Ups", completed: true },
      { name: "Pull-Ups", completed: false },
      { name: "Squats", completed: true },
    ],
  },
];

export default function PeopleTable() {
  const [members] = useState<Member[]>(initialMembers);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null); // Track the selected member

  const handleRowClick = (member: Member) => {
    setSelectedMember(member); // Set the selected member
  };

  const closeDetails = () => {
    setSelectedMember(null); // Close the details card
  };

  return (
    <div id="wd-people-table" className="container mt-4">
      <h2>Members</h2>
      <br />
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Member ID</th>
            <th scope="col">Role</th>
            <th scope="col">Last Exercise</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr
              key={member.id}
              onClick={() => handleRowClick(member)} // Open the details card
              style={{ cursor: "pointer" }}
            >
              <td>
                <div className="d-flex align-items-center">
                  <FaUserCircle className="me-3 fs-1 text-secondary" />
                  {`${member.firstName} ${member.lastName}`}
                </div>
              </td>
              <td>{member.id}</td>
              <td>{member.role}</td>
              <td>{member.lastExercise}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Render Details Card */}
      {selectedMember && (
        <PeopleDetails user={selectedMember} onClose={closeDetails} />
      )}
    </div>
  );
}
