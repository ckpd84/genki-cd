import React, { useEffect, useState } from "react";

const TableProduct = () => {
  const [data, setData] = useState([]);
  const [meta, setMeta] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch("http://localhost:3000/api/products");
    const result = await response.json();
    setData(result.data);
    setMeta(result.meta);
  };
  return (
    <div className="col-lg-4 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Productos en la Base de Datos
          </h6>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-hover"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Categoría</th>
                  <th>Tipo de Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
              </thead>

              <tbody>
                {data.map((p, i) => (
                  <tr>
                    <td key={i}>{p.id}</td>
                    <td key={i}>{p.name}</td>
                    <td key={i}>{p.categories.name}</td>
                    <td key={i}>{p.product_types.name}</td>
                    <td key={i}>{p.product_types.quantity}</td>
                    <td key={i}>{p.product_types.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableProduct;
