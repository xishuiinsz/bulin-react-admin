import type { LayerItem } from "../index";
const TextLayer = (props: LayerItem) => {
	const { id, width, height, left, top, content } = props;
	const style = {
		width: `${width}px`,
		height: `${height}px`,
		left: `${left}px`,
		top: `${top}px`
	};
	return <div className="absolute layer-item" style={style} key={id} dangerouslySetInnerHTML={{ __html: content }}></div>;
};
export default TextLayer;
