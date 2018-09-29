import React, { Component, Fragment } from 'react';


class Contact extends Component {
  componentDidMount() {
    document.title = 'Contact | Fayad Alkhadra';
  }
  render() {
    return (
      <Fragment>
<h2 id="Contact" className="text-center m-5">Contact</h2>
        <form method="POST" action="https://formspree.io/fayyad_r22@yahoo.com" className="bg-dark  container m-auto">
          <div className=" mt-5">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type Your Name"
                name="name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="add email"
                className="form-control"
                placeholder="Type Your Email"
                name="_replyTo"
              />
            </div>
            <div className="form-group">
              <label>Massege</label>
              <textarea
                name="messeag"
                placeholder="Type Your Message"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="mb-5 bg-white text-dark h2 col-lg-2 col-12 btn btn-primary"
            >
              Send
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default Contact;
