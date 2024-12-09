import React, { useState, useEffect } from "react";
import { FaPlus, FaHeart, FaRegHeart, FaTrash, FaEdit } from "react-icons/fa";
import { Modal, Button, Form } from "react-bootstrap"; // Import Bootstrap components
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles
import "./style.css"; // Custom styles
import { Link } from "react-router-dom";

interface DashboardData {
    workouts: number;
    exercises: number;
    completedExercises: number;
    completedWorkouts: number;
    programs: { id: number; name: string; description: string; liked: boolean }[];
}

export default function Dashboard() {
    const [data, setData] = useState<DashboardData>({
        workouts: 0,
        exercises: 0,
        completedExercises: 0,
        completedWorkouts: 0,
        programs: []
    });

    const [showLikedOnly, setShowLikedOnly] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [newProgram, setNewProgram] = useState({ name: "", description: "" });
    const [editingProgram, setEditingProgram] = useState<{ id: number; name: string; description: string } | null>(
        null
    );

    useEffect(() => {
        const fetchData = async () => {
            const simulatedData: DashboardData = {
                workouts: 10,
                exercises: 20,
                completedExercises: 15,
                completedWorkouts: 5,
                programs: Array.from({ length: 6 }, (_, i) => ({
                    id: i + 1,
                    name: `Program ${i + 1}`,
                    description: `This is a description for Program ${i + 1}.`,
                    liked: false
                }))
            };
            setData(simulatedData);
        };

        fetchData();
    }, []);

    const toggleLike = (id: number) => {
        setData((prevState) => ({
            ...prevState,
            programs: prevState.programs.map((program) =>
                program.id === id ? { ...program, liked: !program.liked } : program
            )
        }));
    };

    const toggleShowLikedOnly = () => {
        setShowLikedOnly((prev) => !prev);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProgram(null);
    };

    const handleAddProgram = () => {
        if (newProgram.name.trim() && newProgram.description.trim()) {
            const newId = data.programs.length + 1;
            setData((prevState) => ({
                ...prevState,
                programs: [
                    ...prevState.programs,
                    { id: newId, name: newProgram.name, description: newProgram.description, liked: false }
                ]
            }));
            setNewProgram({ name: "", description: "" });
            setShowModal(false);
        }
    };

    const handleEditProgram = (id: number) => {
        const programToEdit = data.programs.find((program) => program.id === id);
        if (programToEdit) {
            setEditingProgram({ id: programToEdit.id, name: programToEdit.name, description: programToEdit.description });
            setShowModal(true);
        }
    };

    const handleSaveProgram = () => {
        if (editingProgram) {
            setData((prevState) => ({
                ...prevState,
                programs: prevState.programs.map((program) =>
                    program.id === editingProgram.id
                        ? { ...program, name: editingProgram.name, description: editingProgram.description }
                        : program
                )
            }));
            setEditingProgram(null);
        } else {
            handleAddProgram();
        }
        setShowModal(false);
    };

    const deleteProgram = (id: number) => {
        setData((prevState) => ({
            ...prevState,
            programs: prevState.programs.filter((program) => program.id !== id)
        }));
    };

    const filteredPrograms = showLikedOnly
        ? data.programs.filter((program) => program.liked)
        : data.programs;

    return (
        <div className="container my-5">
            <div className="dashboard-container">
                <h1 className="fw-bold me-3 mb-0 d-flex align-items-center mb-4">
                    Dashboard
                    <FaPlus
                        className="text-primary ms-3"
                        style={{ cursor: "pointer", fontSize: "1.5rem" }}
                        title="Add Program"
                        onClick={handleShowModal}
                    />
                    {showLikedOnly ? (
                        <FaHeart
                            className="ms-3"
                            style={{ cursor: "pointer", fontSize: "1.5rem", color: "red" }}
                            title="Show All"
                            onClick={toggleShowLikedOnly}
                        />
                    ) : (
                        <FaRegHeart
                            className="ms-3"
                            style={{ cursor: "pointer", fontSize: "1.5rem", color: "black" }}
                            title="Show Liked"
                            onClick={toggleShowLikedOnly}
                        />
                    )}
                </h1>
                <hr />

                {/* Statistics Section */}
                <div className="row text-center mb-4">
                    <div className="col">
                        <h2 className="fw-bold">{data.workouts}</h2>
                        <p>Workouts</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold">{data.exercises}</h2>
                        <p>Exercises</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold">{data.completedExercises}</h2>
                        <p>Completed Exercises</p>
                    </div>
                    <div className="col">
                        <h2 className="fw-bold">{data.completedWorkouts}</h2>
                        <p>Completed Workouts</p>
                    </div>
                </div>

                {/* Programs Section */}
                <div className="row g-4">
                    {filteredPrograms.map((program) => (
                        <div key={program.id} className="col-md-4">
                            <Link
                                to={`/wefit/program/${program.id}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <div className="card">
                                    <img
                                        src="/images/default-course.jpg"
                                        alt={program.name}
                                        className="card-img-top"
                                        height="160"
                                    />
                                    <div className="card-body text-center">
                                        <div
                                            className="position-absolute top-0 end-0 m-2"
                                            style={{ display: "flex", gap: "10px" }}
                                        >
                                            <FaEdit
                                                style={{
                                                    fontSize: "1.5rem",
                                                    color: "blue",
                                                    cursor: "pointer"
                                                }}
                                                title="Edit Program"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent navigating while editing
                                                    handleEditProgram(program.id);
                                                }}
                                            />
                                            <FaTrash
                                                style={{
                                                    fontSize: "1.5rem",
                                                    color: "red",
                                                    cursor: "pointer"
                                                }}
                                                title="Delete Program"
                                                onClick={(e) => {
                                                    e.preventDefault(); // Prevent navigating while deleting
                                                    deleteProgram(program.id);
                                                }}
                                            />
                                            {program.liked ? (
                                                <FaHeart
                                                    style={{
                                                        fontSize: "1.5rem",
                                                        color: "red",
                                                        cursor: "pointer"
                                                    }}
                                                    title="Unlike"
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevent navigating while liking
                                                        toggleLike(program.id);
                                                    }}
                                                />
                                            ) : (
                                                <FaRegHeart
                                                    style={{
                                                        fontSize: "1.5rem",
                                                        color: "black",
                                                        cursor: "pointer"
                                                    }}
                                                    title="Like"
                                                    onClick={(e) => {
                                                        e.preventDefault(); // Prevent navigating while liking
                                                        toggleLike(program.id);
                                                    }}
                                                />
                                            )}
                                        </div>

                                        <h5 className="card-title mt-3">{program.name}</h5>
                                        <p className="card-text">{program.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Adding/Editing Program */}
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{editingProgram ? "Edit Program" : "Add Program"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Program Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter program name"
                                value={editingProgram ? editingProgram.name : newProgram.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                    editingProgram
                                        ? setEditingProgram({ ...editingProgram, name: e.target.value })
                                        : setNewProgram({ ...newProgram, name: e.target.value })
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter program description"
                                value={editingProgram ? editingProgram.description : newProgram.description}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                                    editingProgram
                                        ? setEditingProgram({ ...editingProgram, description: e.target.value })
                                        : setNewProgram({ ...newProgram, description: e.target.value })
                                }
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveProgram}>
                        {editingProgram ? "Save Changes" : "Add"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
