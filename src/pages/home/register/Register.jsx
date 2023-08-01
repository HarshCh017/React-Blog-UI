import "../register/register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
	<div className="register">
		<span className="registerTitle">Register</span>
		<form  className="registerForm">
			<label >Username</label>
			<input type="text" className="registerInput" placeholder="Enter your username..." />
			<label >E-Mail</label>
			<input type="text" className="registerInput" placeholder="Enter your email..." />
			<label > Password</label>
			<input type="password" className="registerInput" placeholder="Enter password..."/>
			<button className="registerButton">register</button>
		</form>
		<button className="registerLoginButton">
		<Link className="link" to="/login">LOGIN</Link>
		</button>

		
	</div>
  )
}
