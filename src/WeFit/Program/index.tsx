import { Navigate, Route, Routes, useParams } from "react-router";
import React from "react";
import Workouts from "./Workouts";
import PeopleTable from "./People/Table";
import WorkoutEditor from "./Workouts/Workouteditor";
import ProgramsNavigation from "./Navigation";


export default function Programs() {
    const { programId } = useParams<{ programId: string }>();

    return (
        <div className="container-fluid d-flex">
            {/* Sidebar */}
            <div className="d-none d-md-block">
                <ProgramsNavigation />
            </div>

            {/* Main Content */}
            <div className="flex-fill px-4">
                {/* Header */}
                <h1 className="dashboard-container me-3 mb-0 mb-4 mt-3">
                    Program {programId}
                </h1>
                <hr />

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Navigate to="workouts" />} />
                    <Route path="workouts" element={<Workouts />} />
                    <Route path="workouts/:workoutId" element={<WorkoutEditor />} />
                    <Route path="People" element={<PeopleTable />} />
                </Routes>
            </div>
        </div>
    );
}
