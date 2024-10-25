import type { Meta, StoryObj } from "@storybook/react";
import { XIcon } from "./x";

const meta = {
	title: "Icons/X",
	component: XIcon,
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
} as Meta<typeof XIcon>;

export default meta;

type Story = StoryObj<typeof XIcon>;

export const Default: Story = {};
