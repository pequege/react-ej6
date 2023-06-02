import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormColor = () => {
  const coloresEnLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];
  const [listaColores, setListaColores] = useState([coloresEnLocalStorage]);
  const [colorNombre, setColorNombre] = useState('');
  const [colorValorHex, setColorValorHex] = useState('#ff0000');

  const handleSubmit = (e) =>{
    e.preventDefault();
    setListaColores([...listaColores, {colorNombre, colorValorHex}])
    setColorNombre('');
  }

  const borrarColor = (colorABorrar) => {
    let coloresTemp = listaColores.filter((color) => color.colorNombre !== colorABorrar.colorNombre);
    setListaColores(coloresTemp);
  }

  useEffect(()=>{
    localStorage.setItem('listaColores', JSON.stringify(listaColores));
  }, [listaColores])

  return (
    <>
      <div className="border rounded p-3">
        <h2>Administrar color</h2>
            <Form className="d-flex" onSubmit={handleSubmit}>
              <Form.Group className="mx-1" controlId="colorHex">
                <Form.Control type="color" defaultValue={"#ff0000"} 
                onChange={(e) => setColorValorHex(e.target.value)} />
              </Form.Group>
                <Form.Control className="mx-1" type="text" placeholder="Ingrese un color. Ej: Blue"
                onChange={(e) => setColorNombre(e.target.value)} />
              <Form.Group>
              </Form.Group>
              <Button variant="primary" type="submit" className="rounded-circle mx-1">
                <i className="bi-plus-lg"></i>
              </Button>
            </Form>
      </div>
      <ListaColores listaColores={listaColores} borrarColor={borrarColor}></ListaColores>
    </>
  );
};

export default FormColor;
