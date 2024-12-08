export default function Contact() {
    return (
        <div>
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

