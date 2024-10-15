import type { Meta, StoryObj } from "@storybook/react";
import { LocationIcon } from "./location";

const meta = {
	title: "Icons/Location",
	component: LocationIcon,
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
} as Meta<typeof LocationIcon>;

export default meta;

type Story = StoryObj<typeof LocationIcon>;

export const Default: Story = {};
