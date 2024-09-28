import type { Meta, StoryObj } from "@storybook/react";
import { Access } from "./access";

export default {
	title: "Site/Access",
	component: Access,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

type Story = StoryObj<typeof Access>;

export const Default: Story = {};
