import { Layout, Flex } from "antd";
import PostHeader from "./components/header";
import Workbench from "./workbench";

export type LayerItem = {
	id: string;
	type: string;
	label?: string;
	width: number;
	height: number;
	left: number;
	top: number;
	content: string;
};

const headerStyle: React.CSSProperties = {
	textAlign: "center",
	fontSize: 20,
	color: "#fff",
	height: 64,
	paddingInline: 48,
	lineHeight: "64px",
	backgroundColor: "#5058a4",
	fontFamily: "微软雅黑"
};
const contentStyle: React.CSSProperties = {
	textAlign: "center",
	minHeight: 120,
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#0958d9"
};

const siderStyle: React.CSSProperties = {
	width: "200px",
	textAlign: "center",
	lineHeight: "120px",
	color: "#fff",
	backgroundColor: "#376cbc"
};
const { Header, Footer, Sider, Content } = Layout;
const PosterPage = () => {
	return (
		<div className="w-full h-full">
			<Layout className="w-full h-full">
				<Header style={headerStyle}>
					<PostHeader />
				</Header>
				<Layout>
					<Sider style={siderStyle}>Sider</Sider>
					<Content style={contentStyle}>
						<div className="workben-container p-8 h-full">
							<Workbench />
						</div>
					</Content>
					<Sider style={siderStyle}>Sider</Sider>
				</Layout>
			</Layout>
		</div>
	);
};
export default PosterPage;
