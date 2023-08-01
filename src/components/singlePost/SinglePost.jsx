import  "../singlePost/singlePost.css"

export default function SinglePost() {
  return (
	<div className="singlePost">
		<div className="singlePostWrapper">
			<img src="https://images.pexels.com/photos/15148461/pexels-photo-15148461/free-photo-of-landscape-of-a-snowcapped-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
			<h1 className="singlePostTitle">
				Lorem ipsum dolor sit, amet.
				<div className="singlePostEdit">
				<i className="singlePostIcon fa-regular fa-pen-to-square"></i>
				<i className="singlePostIcon fa-regular fa-trash-can"></i>
				</div>
			</h1>
			<div className="singlePostInfo">
				<span className="singlePostAuthor">
					Author: <b>Harsh Chauhan</b>
				</span>
				<span className="singlePostDate"> 1 hour ago</span>
			</div>
			<p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam praesentium molestiae architecto eius porro, tempora aliquid quidem deserunt, obcaecati omnis neque quas doloribus incidunt reprehenderit facilis laudantium explicabo voluptatibus, nesciunt libero assumenda unde? Quasi ad quo culpa est sequi in, maxime, praesentium quis dolores eaque dolorem, amet sint. Nihil culpa autem porro ipsa, eveniet cum, dolor quidem aliquam eum voluptatibus similique nostrum molestias deserunt perspiciatis nemo quo et reprehenderit ad obcaecati accusamus? Consequatur architecto deserunt quasi eos praesentium aliquid vel molestias voluptates et, minus suscipit rerum doloribus non, dicta in, distinctio ut doloremque ex ducimus iusto similique obcaecati commodi! Nam minima, labore, corrupti vitae aliquid nobis repellendus voluptate optio ullam aut eum ducimus distinctio deleniti laboriosam, odio vero temporibus fugiat alias veritatis recusandae nostrum! Facere vel assumenda quod tempore mollitia explicabo pariatur veniam inventore voluptas et sed obcaecati nisi eligendi vero soluta, possimus libero qui iure eveniet eos doloremque odit voluptatibus. Cumque soluta rerum itaque eos voluptatibus sit, magnam at vel eaque dolorem reprehenderit alias, aliquam in, natus distinctio impedit reiciendis recusandae. Vel voluptates, doloremque dolorum sint consequuntur ut omnis nam nobis atque quia obcaecati aliquam illum corrupti deleniti delectus ad exercitationem laudantium! Ipsa dolores optio assumenda. Saepe, commodi quam?</p>
		</div>  
	</div>
  )
}
