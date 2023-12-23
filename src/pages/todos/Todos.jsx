import React, { useEffect, useRef, useState } from "react";
import PageTransition from "../../motions/PageTransition";
import axios from "axios";

const Todos = () => {
  const API_URL = `${import.meta.env.VITE_API_URL}/api/v1`;
  // console.log(API_URL);
  const controllerRef = useRef();

  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
      controllerRef.current = new AbortController();
      const signal = controllerRef.current.signal;

      const resp = await axios.get(API_URL + "/todos", { signal });
      setTodos(resp.data.data);
      //console.log(todos);
    } catch (err) {
      console.warn({ err });
    } finally {
      //console.log("api success");
    }
  };

  return (
    <PageTransition>
      <div className="max-w-6xl w-full mx-auto my-4 p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  bg-slate-50 ">
        {todos.slice(0, 12).map((todo, index) => {
          return (
            <div
              key={index}
              className={` relative flex justify-center shadow-md border-1 border-sky-100 items-center bg-yellow-50  overflow-hidden p-0 m-0`}
            >
              <div className="text-4xl flex-1 flex justify-center items-center ">
                <span>{todo.id}</span>
              </div>
              <div className="flex-1 m-0 p-0">
                <img
                  src={todo.images}
                  className="h-full aspect-square object-cover "
                />
              </div>
            </div>
          );
        })}
      </div>
    </PageTransition>
  );
};

export default Todos;
