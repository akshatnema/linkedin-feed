import {useState, useEffect } from 'react';
import "./Post.scss";
import Post from './Post/Post';
import axios from "axios";

export default function Posts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((response) => {
      console.log(response);
      setData(response.data.results);
    }).catch(err => console.error(err));
  }, [])

  return (
    <>
    {
      data.map((post, index) => (
        <div className="p-3 border rounded-sm posts" key={index}>
         <Post />
      </div>
      ))
    }
    
    </>
  );
}
