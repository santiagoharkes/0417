import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";

function ListitaBootstrap() {
  const [tareitas, setTareitas] = useState([]);
  const [tareaInput, setTareaInput] = useState("");
  const [modoEdicion, setModoEdicion] = useState(false);
  const [tareaAEditar, setTareaAEditar] = useState(null);

  const onInputChange = (e) => {
    setTareaInput(e.target.value);
  };

  const onInputAEditarChange = (e) => {
    setTareaAEditar({ ...tareaAEditar, nombre: e.target.value });
  };

  const borrarTarea = (juancito) => {
    const nuevoArray = tareitas.filter((valor) => valor.id !== juancito);
    setTareitas(nuevoArray);
  };

  const agregarTarea = (e) => {
    e.preventDefault();
    setTareitas([...tareitas, { id: uuid(), nombre: tareaInput }]);
    setTareaInput("");
  };

  const actualizarTarea = (e) => {
    e.preventDefault();

    const nuevoArray = tareitas.map((valor) =>
      valor.id === tareaAEditar.id ? tareaAEditar : valor
    );

    setTareitas(nuevoArray);
    setModoEdicion(false);
    setTareaAEditar(null);
  };

  const editarTarea = (tarea) => {
    setModoEdicion(true);
    setTareaAEditar(tarea);
  };

  return (
    <Container fluid>
      <h1 className="text-center">ESTO ES BUSTRAS</h1>
      <Row>
        <Col xs={12} md={4}>
          <h4 className="text-center">Meté una nueva tareíta</h4>
          <Form onSubmit={modoEdicion ? actualizarTarea : agregarTarea}>
            <Form.Group>
              <Form.Label>Agregá nueva tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Agrega una nueva tarea...."
                onChange={modoEdicion ? onInputAEditarChange : onInputChange}
                value={modoEdicion ? tareaAEditar.nombre : tareaInput}
              />
            </Form.Group>
            <Button variant="dark" className="w-100" type="submit">
              {modoEdicion ? "Actualizar" : "Agregar"}
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={8}>
          <h4 className="text-center">Tareítas</h4>
          <ListGroup as="ul">
            {tareitas.length > 0 ? (
              tareitas.map((valor) => (
                <ListGroup.Item
                  as="li"
                  key={valor.id}
                  className="d-flex justify-content-between"
                >
                  <span className="lead">{valor.nombre}</span>
                  <div>
                    <Button
                      onClick={() => borrarTarea(valor.id)}
                      variant="danger"
                      size="sm"
                      className="mx-2"
                    >
                      Borrar
                    </Button>
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => editarTarea(valor)}
                    >
                      Editar
                    </Button>
                  </div>
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between"
              >
                <span className="lead">No hay tareas para mostrar</span>
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ListitaBootstrap;
