import "./post.css"

export default function Post() {
  return (
	<div className="post">
		<img  className="postImg" src="https://images.pexels.com/photos/15148461/pexels-photo-15148461/free-photo-of-landscape-of-a-snowcapped-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
		<div className="postInfo">
			<div className="postCats">
				<span className="postCat">Music</span>
				<span className="postCat">Life</span>
			</div>
			<span className="postTitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
			<hr />
			<span className="postDate">1 hour ago</span>
		</div>
		<p className="postDesc">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum placeat, esse quis aliquid aliquam eveniet nemo voluptatum qui inventore earum obcaecati ut sed impedit culpa. Quos incidunt porro mollitia distinctio voluptas quis laborum atque iusto, natus, at in error quisquam vero praesentium iste eos dolore assumenda qui veniam fugiat commodi! Unde pariatur officia, quidem doloribus nam doloremque cupiditate ex non.

		</p>
	</div>
  )
}
