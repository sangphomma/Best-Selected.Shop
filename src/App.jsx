import { Route, Routes, useLocation } from "react-router-dom";
import Todos from "./pages/todos/Todos";
import ShowTodo from "./pages/todos/ShowTodo";
import AddTodo from "./pages/todos/AddTodo";
import Navbar from "./components/headers/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/footers/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence initial={false}>
        <div className="flex flex-col min-h-screen w-full bg-sky-50  ">
          <Navbar />
          <div className="flex-1">
            <Routes location={location} key={location.pathname}>
              <Route path="/todos" element={<Todos />} />
              <Route path="/todos/:todoId" element={<ShowTodo />} />
              <Route path="/AddTodo" element={<AddTodo />} />
            </Routes>
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
