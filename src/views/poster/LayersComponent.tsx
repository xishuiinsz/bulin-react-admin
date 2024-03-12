import type { LayerItem } from "./index.tsx";
import TextLayer from "./layersComponent/TextLayer";
import ImageLayer from "./layersComponent/ImageLayer";
const getLayerStyle = (data: LayerItem) => {
	const { width, height, left, top } = data;
	return {
		width: `${width}px`,
		height: `${height}px`,
		left: `${left}px`,
		top: `${top}px`
	};
};

const LayersList: React.FC<Array<LayerItem>> = (props: any) => {
	const layersList = props.layersList;
	return (
		<>
			{layersList.map((item: LayerItem) => {
				if (item.type === "text") {
					return <TextLayer key={item.id} {...item} />;
				}
				if (item.type === "image") {
					return <ImageLayer key={item.id} {...item} />;
				}
				return (
					<div
						className="absolute layer-item"
						style={getLayerStyle(item)}
						key={item.id}
						dangerouslySetInnerHTML={{ __html: item.content }}
					></div>
				);
			})}
		</>
	);
};
export default LayersList;
