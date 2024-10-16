import type { Meta, StoryObj } from "@storybook/react";
import { ClockIcon } from "./clock";

const meta = {
	title: "Icons/Clock",
	component: ClockIcon,
	tags: ["autodocs"],
	args: {
		style: {
			width: 32,
			height: 32,
		},
	},
	parameters: {
		layout: "centered",
	},
} as Meta<typeof ClockIcon>;

export default meta;

type Story = StoryObj<typeof ClockIcon>;

export const Default: Story = {};
