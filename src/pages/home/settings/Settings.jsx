import "../settings/settings.css"
import Sidebar from "../../../components/sidebar/Sidebar"
export default function Settings() {
  return (
	<div className="settings">
	  <div className="settingsWrapper">
		<div className="settingsTitle">
			<span className="settingsUpdateTitle">Update Your Account</span>
			<span className="settingsDeleteTitle">Delete Account</span>
		</div>
		<form  className="settingsForm">
			<label > Profile picture</label>
			<div className="settingsPP">
				<img src="https://images.pexels.com/photos/15148461/pexels-photo-15148461/free-photo-of-landscape-of-a-snowcapped-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
				<label htmlFor="fileInput">
				<i className="settingsPPIcon fa-regular fa-circle-user"></i>
				</label>
				<input type="file" id="fileInput" style={{display:"none"}}/>
			</div>
			<label>Username</label>
			<input type="text" placeholder="Username"/>
			<label>Email</label>
			<input type="email" placeholder="E-Mail"/>
			<label>Password</label>
			<input type="password" />
			<button className="settingsSubmit">Update</button>
		</form>
	  </div>
		<Sidebar></Sidebar>
	  
	</div>
  )
}
