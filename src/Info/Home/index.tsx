export default function Home() {
    return (
        <div className="full-width">
            {/* Hero Section */}
            <div className="text-center bg-light py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Work Out;<br /> Stay Fit;<br /> Stay Healthy</h1>
                    <button className="btn btn-primary mt-4 px-4 py-2">Sign Up Now</button>
                </div>
            </div>

            {/* Trainers Section */}
            <div className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold">Meet your trainers</h2>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button className="btn btn-dark mt-3 px-4 py-2">About Us</button>
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
                <div className="container text-center">
                    <h3 className="fw-bold mb-4">Try it out yourself</h3>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-dark text-white py-5">
                <div className="container" style={{ width: '100%' }}>
                    <h3 className="fw-bold p-3">Contact Us</h3>
                    <form className="p-3">
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" rows={3} placeholder="Message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 py-2">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
