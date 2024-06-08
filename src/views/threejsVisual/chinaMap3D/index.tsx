import { Tabs } from "antd";
import Pie from "./components/pie";
import Curve from "./components/curve";
import "./index.less";
import BookSum from "./images/book-sum.png";
import AddPerson from "./images/add_person.png";
import AddTeam from "./images/add_team.png";
import Today from "./images/today.png";
import BookSum1 from "./images/book_sum.png";

const { TabPane } = Tabs;

const chinaMap3D = () => {
	const onChange = (key: string) => {
		console.log(key);
	};

	const tabsList = [
		{ label: "未来7日", name: 1 },
		{ label: "近七日", name: 2 },
		{ label: "近一月", name: 3 },
		{ label: "近三月", name: 4 },
		{ label: "近半年", name: 5 },
		{ label: "近一年", name: 6 }
	];

	return <div className="china-map-3D">chinaMap3D</div>;
};

export default chinaMap3D;
