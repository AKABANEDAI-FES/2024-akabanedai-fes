import type { Meta, StoryObj } from "@storybook/react";
import { XBrandIcon } from "./x-brand";

const meta = {
	title: "Icons/XBrand",
	component: XBrandIcon,
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
} as Meta<typeof XBrandIcon>;

export default meta;

type Story = StoryObj<typeof XBrandIcon>;

export const Default: Story = {};
