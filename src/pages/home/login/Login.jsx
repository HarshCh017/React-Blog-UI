import "../login/login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
	<div className="login">
		<span className="loginTitle">Login</span>
		<form  className="loginForm">
			<label >E-mail</label>
			<input type="text" className="loginInput" placeholder="Enter your email..." />
			<label > Password</label>
			<input type="password" className="loginInput" placeholder="Enter password..."/>
			<button className="loginButton">Login</button>
		</form>
		<button className="loginRegisterButton">
			<Link className="link" to="/register">Register</Link></button>
	</div>
  )
}
