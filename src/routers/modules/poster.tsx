import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { RouteObject } from "@/routers/interface";

// 在线海报
const posterRouter: Array<RouteObject> = [
	{
		path: "/poster/index",
		element: lazyLoad(React.lazy(() => import("@/views/poster/index"))),
		meta: {
			requiresAuth: true,
			title: "在线海报",
			key: "poster"
		}
	}
];

export default posterRouter;
