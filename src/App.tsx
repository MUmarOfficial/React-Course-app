import "./App.css";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import LoginClassForm from "./components/LoginClassForm";
import Todos from "./components/Todos.tsx";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-6 mt-250">
      <section className="flex justify-center items-center gap-6">
        <Counter />
        <Cart />
      </section>
      <section className="flex justify-center items-center gap-6">
        <LoginForm />
        <LoginClassForm />
      </section>
      <section className="flex flex-col justify-center items-center gap-6 px-24 py-8 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
        <h1 className="text-4xl font-semibold">Todos</h1>
        <div className="flex">
          <Todos />
        </div>
      </section>
    </main>
  );
};

export default App;
