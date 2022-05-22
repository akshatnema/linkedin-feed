import "./Form.scss";
import axios from "axios";
import { useState } from "react";
export default function Form({ showForm }) {
  const [open, setOpen] = useState(showForm);
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    //db
    const profile_id = 1234;
    const post_id = 123;
    console.log(reason);
    axios.post("http://localhost:8000/feedback", {
        profile_id,
        post_id,
        feedback: reason,
      }, {
        headers: { 'Content-Type': 'application/json'}
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setOpen(false);
  };

  const onChange = (e) => {
    setReason(e.target.value);
  };
  const closeForm = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <div className="popup">
          <div className="p-3 form-inner">
            <div className="d-flex flex-row justify-content-between form-top">
              <div className="fs-5 head">Don't want to see this</div>
              <div className="close" onClick={closeForm}>
                <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
            <hr />
            <div className="text-start form-mid">
              <div className="fw-bold head">
                Tell us why you don't want to see this
              </div>
              <div className="sub-head">
                Your feedback will help us improve your experience
              </div>
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="I'm not interested in the author"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    <div className="inline">
                      I'm not interested in the author
                    </div>
                  </div>
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="I'm not interested in this topic"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    I'm not interested in this topic
                  </div>
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="I've seen too many posts on this topic"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    I've seen too many posts on this topic
                  </div>
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="I've seen this post before"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    I've seen this post before
                  </div>
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="This post is old"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    This post is old
                  </div>
                  <div className="d-flex flex-row my-2">
                    <input
                      onChange={onChange}
                      type="radio"
                      value="It's something else"
                      name="choices"
                      className="my-auto mx-2"
                    />{" "}
                    It's something else
                  </div>
                </div>
                <div className="foot">
                  <div className="pe-2">
                    If you think this goes against our Professional Community
                    Policies, please let us know.
                  </div>
                  <a href="/" className="text-primary report">
                    Report this Post
                  </a>
                </div>
                <hr />
                <div className="text-end">
                  <button
                    type="submit"
                    className="py-1 px-3 text-bg-primary submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
