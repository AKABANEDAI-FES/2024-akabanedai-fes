import type { Meta, StoryObj } from "@storybook/react";
import { Guide } from "./guide";

export default {
	title: "Site/Guide",
	component: Guide,
	tags: ["autodocs"],
	args: {
		children: "サンプルテキスト",
		headingText:"サンプルテキスト",
		listItem:["テキスト","テキスト"],
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

type Story = StoryObj<typeof Guide>;

export const Default: Story = {};
