import type { Meta, StoryObj } from "@storybook/react";
import { FamilyIcon } from "./family";

const meta = {
	title: "Icons/FamilyIcon",
	component: FamilyIcon,
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
} as Meta<typeof FamilyIcon>;

export default meta;

type Story = StoryObj<typeof FamilyIcon>;

export const Default: Story = {};
