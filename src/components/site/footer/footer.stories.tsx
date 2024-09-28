import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta = {
	title: "Site/Footer",
	component: Footer,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {};
