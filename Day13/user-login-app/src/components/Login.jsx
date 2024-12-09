import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
  return (
    <div>
        <form>
        
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" id="email"/>
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"/>
  </div>
  <button  className="btn btn-success">Login</button>
</form>
    </div>
  )
}

export default Login