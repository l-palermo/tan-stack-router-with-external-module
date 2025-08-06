import { createFileRoute } from "@tanstack/react-router";
import { FeatureContext, screenTwoRoute, screenOneRoute } from "../../feature";

export const Route = createFileRoute("/feature")({
  component: FeatureContext({ basePath: "/feature" }),
});

Route.addChildren([screenOneRoute(Route), screenTwoRoute(Route)]);
