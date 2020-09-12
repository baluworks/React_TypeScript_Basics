import * as React from "react";
import "./styles.css";
import { List } from "./Components/ListComp";
export default function App() {
  const usersList: Array<any> = [
    {
      firstName: "Chaitra Sree Shanmukhi",
      lastName: ".Ch"
    },
    {
      firstName: "Mukunda V R",
      lastName: ".Ch"
    },
    {
      firstName: "Balajee",
      lastName: ".Ch"
    },
    {
      firstName: "Sowmya",
      lastName: ".Ch"
    }
  ];

  //const getUserName = (user: any) => `${user.firstName} ${user.lastName}`;

  return (
    <div className="App">
      <h1>Hello!</h1>
      <List list={usersList} />
    </div>
  );
}
