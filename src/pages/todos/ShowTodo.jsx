import React, { useEffect, useRef, useState } from "react";
import PageTransition from "../../motions/PageTransition";
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowTodo = () => {
  const [todo, setTodo] = useState({});
  const { todoId } = useParams();
  //console.log(todo);
  const controllerRef = useRef();
  const URL_API = `${import.meta.env.VITE_API_URL}/api/v1/todos/${todoId}`;
  useEffect(() => {
    console.log(todoId);
    if (todoId !== undefined && todoId !== null) {
      fetchTodo();
    }
  }, []);
  const fetchTodo = async () => {
    try {
      //console.log(URL_API);
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();
      const signal = controllerRef.current.signal;

      const resp = await axios.get(URL_API, { signal });
      if (resp) {
        setTodo(resp.data.data);
        //console.log(todo);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <PageTransition>
      <div className=" p-2 mx-auto grid grid-cols-1 gap-4 place-content-center ">
        <div className="flex flex-col place-self-center w-72 shadow-md  bg-slate-100 rounded-md p-2">
          {(() => {
            if (todo.images) {
              return (
                <div>
                  <img src={todo.images} className="w-full object-cover" />
                  <div className="my-3 flex justify-center items-center ">
                    <span className="flex w-10 h-10 justify-center items-center shadow-sm rounded-full bg-yellow-100">
                      {todo.id}
                    </span>
                  </div>
                </div>
              );
            } else {
              return (
                <span className="font-thin text-red-600">No to do show</span>
              );
            }
          })()}
        </div>
      </div>
    </PageTransition>
  );
};

export default ShowTodo;
