import React, {Component} from 'react';

class CardUser extends Component {
    constructor (props) {
      super (props);
      this.state = {
        meta: "",
        users: []
      };
    }
  
    componentDidMount () {
      fetch ("http://localhost:3000/api/users")
        .then (res => res.json())
        .then ((result) => { this.setState (
          {
            meta: result.meta,
            users: result.users
          }
          )})
        .catch ( error => console.log (error))
    }
    
    render () {
      const { error, meta } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else {
        return (
        <div className="col-md-4 mb-4" >
            <div className= "card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {"Usuarios en la Base de Datos"}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{meta.count}</div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
    }
}

export default CardUser;