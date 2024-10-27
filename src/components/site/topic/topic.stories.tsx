import type { Meta, StoryObj } from "@storybook/react";
import { Topic } from "./topic";

const meta = {
	title: "Site/Topic",
	component: Topic,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof Topic>;

export default meta;

type Story = StoryObj<typeof Topic>;

export const Default: Story = {};
