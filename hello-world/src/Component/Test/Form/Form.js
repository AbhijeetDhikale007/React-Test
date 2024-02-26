function Form() {
    return (
            <div>
                <form className="form-control">
                    <h3 className="text-center">Contact Form</h3>
                    <input className="form-control" placeholder="Enter Your First Name" required /><br/>
                    <input className="form-control" placeholder="Enter Your Last Name" required /><br />
                    <input className="form-control" placeholder="Enter Your E-Mail Address" type="email" required /><br />
                    <h4 className="text-center">Message</h4>
                    <textarea className="align-self-center" placeholder="Enter Your Message" required></textarea><br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
    )
}

export default Form;