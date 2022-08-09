import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Reacticonsvg from "./images/React-icon.svg.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencil,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import "./todolist.css";
const Todolist = () => {
  const initialState = [
    { id: 1, name: "Alice", family: "Lane" },
    { id: 2, name: "Bob", family: "Adams" },
  ];

  const [employees, setEmployees] = useState(initialState);
  const [namee, setNamee] = useState("");
  const [familyy, setFamilyy] = useState("");
  const [nameeu, setNameeu] = useState("");
  const [familyyu, setFamilyyu] = useState("");
  const lastValue = Object.values(employees).pop();
  const [flag, setFlag] = useState(null);
  console.log(lastValue.id);

  const add = (e) => {
    e.preventDefault();
    if (((namee && familyy) || "").trim().length !== 0) {
      console.log("input value is NOT empty");

      setEmployees((objectList) => [
        ...objectList,
        { id: lastValue.id + 1, name: namee, family: familyy },
      ]);
      setNamee("");
      setFamilyy("");
    } else {
      console.log("input value is empty");
      setEmployees([...employees]);
    }
  };

  const updateObjectInArray = (employee) => {
    setEmployees((current) =>
      current.map((obj) => {
        if (obj.id === employee.id) {
          return { ...obj, name: nameeu, family: familyyu };
        }

        return obj;
      })
    );
    setFlag(null);
  };

  const removeObjectFromArray = (employee) => {
    setEmployees((current) =>
      current.filter((obj) => {
        return obj.id !== employee.id;
      })
    );
  };
  console.log(flag);
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Reacticonsvg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>React Todo List</Navbar.Text>
          </Navbar.Collapse>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href="#home">GitHub</Navbar.Brand>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <Container>
        <Row>
          <Col>
            <Form>
              <label>First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                value={namee}
                placeholder="Your name.."
                onChange={(e) => setNamee(e.target.value)}
              ></input>
              <label>Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                value={familyy}
                placeholder="Your last name.."
                onChange={(e) => setFamilyy(e.target.value)}
              ></input>
              <Button variant="primary" onClick={add}>
                Add
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container>
        <br />
        <div id="maindiv">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>

            {employees.map((employee) => {
              return (
                <tbody key={employee.id}>
                  <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.family}</td>
                    <td>
                      <button
                        className="divitem"
                        variant="danger"
                        onClick={() => removeObjectFromArray(employee)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button
                        className="divitem"
                        variant="warning"
                        onClick={() => setFlag(employee.id)}
                      >
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                      {flag === employee.id ? (
                        <div>
                          <input
                            type="text"
                            id="message1"
                            name="message"
                            onChange={(e) => setNameeu(e.target.value)}
                            defaultValue={employee.name}
                          />
                          <input
                            type="text"
                            id="message2"
                            name="message"
                            onChange={(e) => setFamilyyu(e.target.value)}
                            defaultValue={employee.family}
                          />
                          <button
                            className="divitem"
                            onClick={(e) => updateObjectInArray(employee)}
                          >
                            <FontAwesomeIcon icon={faRefresh} />
                          </button>
                        </div>
                      ) : (
                        <div></div>
                      )}{" "}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </div>
      </Container>
    </>
  );
};

export default Todolist;
