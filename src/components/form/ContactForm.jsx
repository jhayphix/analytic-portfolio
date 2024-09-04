// ... React modules

// ... Context

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/

const ContactForm = () => {
  /*
    |----------------------------------------
    | Return
    |----------------------------------------
  */
  return (
    <div className="row">
      <div className="col">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="row row-cols-md-2 row-cols-1">
            {/* Name */}
            <div className="form-floating my-4 col">
              <input
                type="text"
                id="name"
                name="Name"
                className="form-control"
                placeholder="Name"
                required
              />
              <label htmlFor="name" className="text_muted_1">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="form-floating my-4 col">
              <input
                type="email"
                id="email"
                name="Email"
                className="form-control"
                placeholder="Email"
                required
              />
              <label htmlFor="email" className="text_muted_1">
                Email
              </label>
            </div>

            {/* Query */}
            <div className="my-4 col">
              <select
                className="form-select py-3"
                name="Query"
                id="query"
                defaultValue="--Your Query--" // Use defaultValue to set the initial selected option
                required
              >
                <option value="--Your Query--">--Your Query--</option>
                <option value="Business Query">Business Query</option>
                <option value="Personal Query">Personal Query</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Phone */}
            <div className="form-floating my-4 col">
              <input
                type="tel"
                id="phone"
                name="Phone"
                className="form-control"
                placeholder="Phone / Mobile no."
                required
              />
              <label htmlFor="phone" className="text_muted_1">
                Phone / Mobile no.
              </label>
            </div>
          </div>

          {/* Query */}
          <div className="form-floating my-4">
            <textarea
              className="form-control"
              name="Comment"
              id="comment"
              style={{ height: "140px" }}
              placeholder="Leave me a comment"
              required
            ></textarea>
            <label htmlFor="comment" className="text_muted_1">
              Leave me a comment...
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-lg btn_accent_1 me-2">
            Message Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
