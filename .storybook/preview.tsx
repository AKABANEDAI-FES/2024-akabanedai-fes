import type { Preview } from "@storybook/react";
import "@/app/globals.css";
import { ViewTransitions } from "next-view-transitions";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => (
			<ViewTransitions>
				<Story />
			</ViewTransitions>
		),
	],
};

export default preview;
