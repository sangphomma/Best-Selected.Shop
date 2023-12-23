import React from "react";
import PageTransition from "../../motions/PageTransition";

const Todos = () => {
  return (
    <PageTransition>
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="card flex justify-center items-center bg-yellow-100">
          <span className="text-4xl ">Todos</span>
        </div>
      </div>
    </PageTransition>
  );
};

export default Todos;
