import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="full-width">
            <div
                className="text-center bg-light py-5"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://st.hzcdn.com/simgs/pictures/home-gyms/skyline-park-at-easton-park-avalon-ll-dream-finders-homes-img~49e181e80c0a9504_14-1713-1-b33d3e6.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "500px", // Adjust the height as needed
                    color: "white", // Ensure text is visible on dark overlay
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">
                        Work Out;<br /> Stay Fit;<br /> Stay Healthy
                    </h1>
                    <Link to="/wefit/signup">
                        <button className="btn btn-primary mt-4 px-4 py-2">Sign Up Now</button>
                    </Link>
                </div>
            </div>

            {/* Trainers Section */}
            <div className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold">Meet your trainers</h2>
                    <p className="text-muted">
                        Your fitness journey, on your schedule! Our virtual trainers bring the gym to you with on-demand workout videos designed to fit your lifestyle. Whether you're at home, traveling, or outdoors, you can access expert-guided sessions anytime, anywhere. Each trainer brings energy, expertise, and motivation straight to your screen, helping you stay consistent and crush your goals at your own pace. Let’s make fitness flexible, fun, and effective—just for you!
                    </p>
                    {/* <button className="btn btn-dark mt-3 px-4 py-2">About Us</button> */}
                    <Link to="/Info/About" className="btn btn-dark mt-3 px-4 py-2">
                        About Us
                    </Link>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-light py-5">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <h3 className="fw-bold">100+</h3>
                            <p className="text-muted">different workouts</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="fw-bold">1.5m</h3>
                            <p className="text-muted">active users</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="fw-bold">500k</h3>
                            <p className="text-muted">active coaches</p>
                        </div>
                        <div className="col-md-3 mb-4">
                            <h3 className="fw-bold">10+</h3>
                            <p className="text-muted">experiences</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-5">
                <div className="container text-center">                    <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p className="text-muted">
                                    "The virtual workouts have completely transformed my routine! I love being able to follow along with my trainer’s energy and expertise anytime, anywhere. It feels like they’re right there with me!"
                                    – Jessica R.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p className="text-muted">
                                    "The on-demand videos are perfect for my busy schedule. The trainers make every session motivating and fun, and I’ve seen incredible results in just a few months!"
                                    – Michael T.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p className="text-muted">
                                    "I was skeptical about virtual training at first, but these videos are amazing! The trainers explain everything so clearly, and I love how easy it is to stay consistent with my workouts."
                                    – Samantha L.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3 className="fw-bold mb-4 mt-3">Start your workout now!</h3>
                </div>
                </div>
            </div>
        </div>
    );
}
