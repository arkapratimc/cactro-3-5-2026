import {
    type RouteConfig, index, route 
} from "@react-router/dev/routes";

export default [
    index( "routes/home.tsx" ),
    route(
        "stories/:id",
        "routes/story-view.tsx" 
    )
] satisfies RouteConfig;
