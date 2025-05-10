import { FC } from "react";
// import styles from "./Button.module.css";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
};

const StyledButton = styled.button`
  margin: 2px;
  padding: 10px;
  background-color: purple;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: 2px solid white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: purple;
    border: 2px solid white;
    font-weight: normal;
  }
`;

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    // <button
    //     //   style={{
    //     //     margin: 2,
    //     //     padding: 10,
    //     //     backgroundColor: "#3b82f6",
    //     //     color: "white",
    //     //     fontWeight: "bold",
    //     //     borderRadius: 8,
    //     //     border: "none",
    //     //    cursor: "pointer",
    //       //   }}
    //       className={styles.myButton}
    //     //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    // >
    //   {text}
    // </button>
    <StyledButton>{text}</StyledButton>
  );
};

export default Button;
