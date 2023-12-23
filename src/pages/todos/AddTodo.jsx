import React from "react";
import PageTransition from "../../motions/PageTransition";

const AddTodo = () => {
  return (
    <PageTransition>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="card flex justify-center items-center bg-orange-100">
          <span className="text-4xl ">Add Todo</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default AddTodo;
