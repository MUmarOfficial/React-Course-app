import "./App.css";
// import AutoCounter from "./components/AutoCounter.tsx";
// import PostsPage from "./PostsPage.tsx";
// import Cart from "./components/Cart";
// import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
// import LoginClassForm from "./components/LoginClassForm";
// import Todos from "./components/Todos.tsx";
// import WelcomeMessage from "./components/WelcomeMessage.tsx";
// import { useState } from "react";

const App = () => {
  // const [showCounter, setShowCounter] = useState(true);
  return (
    <main className="flex flex-col justify-center items-center gap-6 ">
      {/* <section className="flex justify-center items-center gap-6">
        <Counter />
        <Cart />
      </section> */}
      <section className="flex justify-center items-center gap-6">
        <LoginForm />
        {/* <LoginClassForm /> */}
      </section>
      {/* <section className="flex flex-col justify-center items-center gap-6 px-24 py-8 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
        <h1 className="text-4xl font-semibold">Todos</h1>
        <div className="flex">
          <Todos />
        </div>
      </section> */}
      {/*<section className="flex flex-col justify-center items-center gap-6 px-24 py-8 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md">
        <WelcomeMessage
          isLoggedIn={true}
          user={{
            name: "Umar",
            type:"guest",
          }}
        />
      </section> */}
    </main>
    // <main className="flex flex-col justify-center items-center gap-6 ">
    //   {showCounter && <AutoCounter />}
    //   <button
    //     onClick={() => {
    //       setShowCounter((show) => !show);
    //     }}
    //   >
    //     Toggle show counter
    //   </button>
    //   <PostsPage></PostsPage>
    // </main>
  );
};

export default App;
