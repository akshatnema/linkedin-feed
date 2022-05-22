import "./Menu.scss";
import Form from "../Form/Form";
import { useState } from "react";
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const showForm = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Form showForm={isOpen} />}
      {!isOpen && <div className="position-absolute py-2 border menu">
        <ul>
          <li className="d-flex flex-row">
            <i class="fa-regular fa-bookmark my-auto pe-2"></i>
            Save
          </li>
          <li className="d-flex flex-row">
            <i class="fa-solid fa-link my-auto pe-2"></i>
            Copy link to Post
          </li>
          <li className="d-flex flex-row">
            <i class="fa-regular fa-circle-xmark my-auto pe-2"></i>
            Unfollow Elton Lazzarin
          </li>
          <li className="d-flex flex-row">
            <i class="fa-solid fa-xmark my-auto pe-2"></i>
            Remove connection with Elton Lazzarin
          </li>
          <li className="d-flex flex-row" onClick={showForm}>
            <i class="fa-regular fa-eye-slash my-auto pe-2"></i>
            I don't want to see this
          </li>
          <li className="d-flex flex-row">
            <i class="fa-regular fa-eye my-auto pe-2"></i>
            Who can see this post?
          </li>
        </ul>
      </div>
  }  </>
  );
}
