import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./todolist.css";
import AppNavbar from "./components/AppNavbar";

const Todolist = () => {
  const initialState = [
    { id: 1, name: "Alice", family: "Lane" },
    { id: 2, name: "Bob", family: "Adams" },
  ];

  const [employees, setEmployees] = useState(initialState);
  const [creatingName, setCreatingName] = useState("");
  const [creatingFamily, setCreatingFamily] = useState("");
  const [editingName, setEditingName] = useState("");
  const [editingFamily, setEditingFamily] = useState("");
  const [editingEmployeeId, setEditingEmployeeId] = useState(null);

  const add = (e) => {
    e.preventDefault();
    if (((creatingName && creatingFamily) || "").trim().length !== 0) {
      console.log("input value is NOT empty");

      setEmployees((objectList) => [
        ...objectList,
        {
          id: employees.length + 1,
          name: creatingName,
          family: creatingFamily,
        },
      ]);
      setCreatingName("");
      setCreatingFamily("");
    } else {
      console.log("input value is empty");
      setEmployees([...employees]);
    }
  };

  const updateObjectInArray = (employee) => {
    setEmployees((current) =>
      current.map((obj) => {
        if (obj.id === employee.id) {
          return { ...obj, name: editingName, family: editingFamily };
        }

        return obj;
      })
    );
    setEditingEmployeeId(null);
  };

  const removeObjectFromArray = (employee) => {
    setEmployees((current) =>
      current.filter((obj) => {
        return obj.id !== employee.id;
      })
    );
  };

  const startEditingEmployee = (employee) => {
    setEditingEmployeeId(employee.id);
    setEditingName(employee.name);
    setEditingFamily(employee.family);
  };

  return (
    <>
      <AppNavbar />
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
                value={creatingName}
                placeholder="Your name.."
                onChange={(e) => setCreatingName(e.target.value)}
              ></input>
              <label>Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                value={creatingFamily}
                placeholder="Your last name.."
                onChange={(e) => setCreatingFamily(e.target.value)}
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
                        onClick={() => startEditingEmployee(employee)}
                      >
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                      {editingEmployeeId === employee.id && (
                        <div>
                          <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                          />
                          <input
                            type="text"
                            value={editingFamily}
                            onChange={(e) => setEditingFamily(e.target.value)}
                          />
                          <button
                            className="divitem"
                            onClick={(e) => updateObjectInArray(employee)}
                          >
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                        </div>
                      )}
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
