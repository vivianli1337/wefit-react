import { Link, useNavigate, useParams } from "react-router";

export default function ProgramsNavigation() {
    const navigate = useNavigate();
    const { programId } = useParams<{ programId: string }>(); // Get the programId from the URL
    const links = ["Workouts", "People"];

    const handleUnenroll = () => {
        // Redirect to the dashboard or handle unenroll logic
        navigate("/wefit/dashboard");
    };

    return (
        <div id="wd-program-navigation" className="wd list-group fs-5 rounded-0 mt-5">
            {links.map((link) => (
                <button
                    key={link}
                    className="list-group-item text-start w-100"
                    onClick={() => navigate(`/wefit/program/${programId}/${link.toLowerCase()}`)} // Navigate dynamically
                >
                    {link}
                </button>
            ))}
            {/* Unenroll Button */}
            <button
                className="btn btn-dark w-100 mt-4"
                onClick={handleUnenroll}
            >
                Unenroll
            </button>
        </div>
    );
}
