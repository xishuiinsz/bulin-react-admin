import { MouseEvent } from "react";
import LayersListComponent from "./LayersComponent";
import { layersList } from "./data";
import "./workbench.less";

const Workbench = () => {
	const WorkbenchMousedown = (e: MouseEvent) => {
		e.stopPropagation();
		console.log(e);
	};
	return (
		<div onClick={WorkbenchMousedown} className="workbench select-none relative h-full w-full bg-blue-950">
			<LayersListComponent layersList={layersList} />
		</div>
	);
};
export default Workbench;
