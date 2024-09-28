import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const meta = {
	title: "Site/Hero",
	component: Hero,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {};
