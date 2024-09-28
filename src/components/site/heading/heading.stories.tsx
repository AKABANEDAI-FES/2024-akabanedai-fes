import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./heading";

const meta = {
	title: "Site/Heading",
	component: Heading,
	tags: ["autodocs"],
	args: {
		children: "サンプルテキスト",
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};
