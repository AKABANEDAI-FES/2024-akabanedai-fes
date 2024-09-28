import type { Meta, StoryObj } from "@storybook/react";
import { InstagramBrandIcon } from "./instagram-brand";

const meta = {
	title: "Icons/InstagramBrand",
	component: InstagramBrandIcon,
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
} as Meta<typeof InstagramBrandIcon>;

export default meta;

type Story = StoryObj<typeof InstagramBrandIcon>;

export const Default: Story = {};
