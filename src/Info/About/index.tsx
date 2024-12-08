export default function About() {
    return (
        <div>
            <div className="hero-section d-flex align-items-center">
                <div className="container text-center text-md-start d-md-flex align-items-center">
                    <div className="col-md-6">
                        <img
                            src="https://www.researchdive.com/blogImages/uHaXWDFXF7.jpeg"
                            alt="Fitness Image"
                            className="img-fluid float-start me-3 rounded-5"
                            style={{ maxWidth: '600px' }}
                        />
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="fw-bold wefit">WEFIT</h1>
                        <br />
                        <p className="fs-5">
                            Founded in 2020, WeFit was born from a simple idea: to make fitness accessible, flexible, and empowering for everyone. In a fast-paced world, we wanted to create a platform where staying active fits seamlessly into your lifestyle—no matter where you are or what your schedule looks like.
                            Our team of passionate, certified trainers brings you engaging on-demand workout videos designed to suit all fitness levels and goals. Whether you’re working out at home, outdoors, or on the go, WeFit is here to guide and motivate you every step of the way.
                            Since our launch, we’ve helped thousands of individuals take control of their fitness journey on their own terms. Join us and become part of a growing community dedicated to making health and wellness a part of everyday life. With WeFit, it’s fitness—whenever, wherever!
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="mission-section text-center py-5">
                <div className="container">
                    <h2 className="fw-bold">Our Mission</h2>
                    <p className="text-muted fs-5">
                        To empower everyone to stay active and healthy with flexible, on-demand fitness solutions that fit any lifestyle, anytime, anywhere.
                    </p>
                    <div className="row mt-4">
                        <div className="col text-uppercase fw-bold">Empower</div>
                        <div className="col text-uppercase fw-bold">Motivate</div>
                        <div className="col text-uppercase fw-bold">Healthy</div>
                        <div className="col text-uppercase fw-bold">Together</div>
                    </div>
                </div>
            </div>
        </div>
    );
} 