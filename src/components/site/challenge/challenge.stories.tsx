import type { Meta, StoryObj } from "@storybook/react";
import { Challenge } from "./challenge";

const meta = {
	title: "Site/Challenge",
	component: Challenge,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} satisfies Meta<typeof Challenge>;

export default meta;

type Story = StoryObj<typeof Challenge>;

export const Default: Story = {};
