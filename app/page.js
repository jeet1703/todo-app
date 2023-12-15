"use client"
import { list } from "postcss";
import React ,{useState} from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);
  const submitHandler = (e)=>{
    e.preventDefault();
    setmainTask([...mainTask, {title,desc}]);
    
    console.log(desc);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }
  let renderTask = <h2>No Task Available</h2>;
  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return <li className="items-center flex justify-between">
       <div  className="flex items-center justify-between w-2/3 m-2 ">
        <h5 className="text-2xl  font-semibold">{t.title}</h5>
        <h6 className="text-xl font-semibold">{t.desc}</h6>
      </div>
      <button onClick={()=>{
        deleteHandler(i);
      }} className=" bg-red-500 px-3 py-2 text-white mt-2">Delete</button>
      </li>
    })
    const deleteHandler = (i)=>{
      let copyTask = [...mainTask];

      copyTask.splice(i,1);
      setmainTask(copyTask);
    }
  }
  
  return (
    <>
      <h1 className=" bg-black text-center text-white p-5 text-5xl">
        My Todo List
      </h1>
      <form className="text-center" onSubmit={submitHandler}>
        <input
          placeholder="Enter Task Here"
          className="text-2xl  border-zinc-600 border-2 m-5 p-2"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />
        <input
          placeholder="Enter Description Here"
          className="text-2xl  border-zinc-600 border-2 m-5 p-2"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value)
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl m-5">
          Add Task
        </button>
      </form>
      <hr/>
      <div className="p-8  bg-slate-400 m-1">
        {renderTask}
      </div>
    </>
  );
};

export default page;
