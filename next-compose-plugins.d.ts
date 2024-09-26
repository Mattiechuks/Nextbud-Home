declare module "next-compose-plugins" {
	import { NextConfig } from "next";
	const withPlugins: (plugins: any[], config: NextConfig) => NextConfig;
	export default withPlugins;
}
