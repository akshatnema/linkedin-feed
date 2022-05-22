import {useState} from "react";
import profilepic from "./pic.jpg";
import pic from "./main-pic.png";
import Menu from "../../Menu/Menu";
export default function Post() {
    const [menu, showMenu] = useState(false);
    const showMenuList = () =>{
        if(menu) showMenu(false);
        else showMenu(true);
     }
  return (
    <>
      <div className="d-flex flex-row justify-content-between top">
        <div className="text-start following">
          <span className="fw-bold">Ayush Kumar</span> and{" "}
          <span className="fw-bold">Arpit Singh</span> liked this post.
        </div>
        <div className="menu">
          {menu && <Menu />}
          <i class="fa-solid fa-ellipsis" onClick={() => showMenuList()}></i>
        </div>
      </div>

      <hr />
      <div className="d-flex flex-row profile">
        <div className="profile-pic">
          <img src={profilepic} height="50" width="50" alt="profile-pic" />
        </div>
        <div className="ps-2 d-flex text-start flex-column profile-det">
          <div className="fw-bold profile-name">Elton Lazzarin</div>
          <div className="fw-normal profile-desc">
            Fullstack Developer | Node.js | ReactJS | React Native | IT
            Infrastructure Analyst
          </div>
          <div className="fw-light post-date">45m</div>
        </div>
      </div>
      <div className="fw-normal text-start post-desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur
        saepe dolore, suscipit natus iusto placeat tempora unde impedit magni!
        Quas totam aut molestias eaque nulla. Enim distinctio accusamus velit!
      </div>
      <div className="mt-2 post-pic">
        <img src={pic} height="200" className="post-img" alt="post-pic" />
      </div>
      <hr />
      <div className="d-flex flex-row justify-content-evenly text-gray-300 post-button">
        <div className="d-flex flex-row post-like">
          <i class="fa-solid fa-thumbs-up my-auto px-2"></i>
          Like
        </div>
        <div className="d-flex flex-row post-comment">
          <i class="fa-solid fa-comment my-auto px-2"></i>
          Comment
        </div>
        <div className="d-flex flex-row post-share">
          <i class="fa-solid fa-share my-auto px-2"></i>
          Share
        </div>
        <div className="d-flex flex-row post-send">
          <i class="fa-solid fa-arrow-up-right-from-square my-auto px-2"></i>
          Send
        </div>
      </div>
    </>
  );
}
