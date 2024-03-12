import { FileImageOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const PostHeader = () => {
	return (
		<div className="w-full h-full flex">
			<div className="header-left">
				<FileImageOutlined />
			</div>
			<div className="header-center ml-8">
				<Link to="/home/index">首页</Link>
			</div>
			<div className="header-right"></div>
		</div>
	);
};
export default PostHeader;
