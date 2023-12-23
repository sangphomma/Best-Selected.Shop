import { Route, Routes, useLocation } from "react-router-dom";
import Todos from "./pages/todos/Todos";
import ShowTodo from "./pages/todos/ShowTodo";
import AddTodo from "./pages/todos/AddTodo";
import Navbar from "./components/headers/Navbar";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
        <div className="flex flex-col min-h-screen w-full bg-sky-100 m-auto ">
          <Navbar />
          <Routes location={location} key={location.pathname}>
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:todo" element={<ShowTodo />} />
            <Route path="/AddTodo" element={<AddTodo />} />
          </Routes>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
