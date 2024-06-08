import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "threejs3D可视化"
		},
		children: [
			{
				path: "/threejsVisual/map3D",
				element: lazyLoad(React.lazy(() => import("@/views/threejsVisual/chinaMap3D/index"))),
				meta: {
					requiresAuth: true,
					title: "3D中国地图",
					key: "map3D"
				}
			}
		]
	}
];

export default dashboardRouter;
