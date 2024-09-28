import type { Meta, StoryObj } from "@storybook/react";
import { Sponsor } from "./sponsor";

const meta = {
	title: "Site/Sponsor",
	component: Sponsor,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof Sponsor>;

export default meta;

type Story = StoryObj<typeof Sponsor>;

export const Default: Story = {};
