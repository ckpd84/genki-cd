import React, {Component} from 'react';

class Categorias extends Component {
  constructor (props) {
    super (props);
    this.state = {
        meta: "",
        categorias:[],
    };
  }
  
    componentDidMount () {
      fetch ("http://localhost:3000/api/products/categories")
        .then (res => res.json())
        .then ((result) => { this.setState (
          {
            meta: result.meta,
            categorias: result.categorias,
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, categorias} = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
          return (
            <div className="col-lg-6 mb-4">	
              <div className="card shadow">

                <div className="card-header py-3">
				          <h6 className="m-0 font-weight-bold text-primary">Categorias en la Base de Datos</h6>
			          </div>

                <div className= "row text-center py-3">
                    <div className="col-md-4 mb-4 center mx-auto">
                      {categorias.map (c => (
                      <div className="card bg-info text-white mt-2">
                      <div className="card-body">{c.name}</div>
                      </div>
                      ))}
                    </div>

                    <div className="col-md-4 mb-4 center mx-auto">
                      {categorias.map (c => (
                      <div className="card bg-info text-white mt-2">
                      <div className="card-body">{"Cantidad de Productos: "}{c.products.length}</div>
                      </div>
                      ))}  
			              </div>
                  </div>  
              </div>
            </div>
          )
        }
      }
    }
export default Categorias;
