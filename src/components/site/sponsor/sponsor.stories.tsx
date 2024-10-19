import type { Meta, StoryObj } from "@storybook/react";
import { Sponsors } from "./sponsor";

const meta = {
	title: "Site/Sponsor",
	component: Sponsors,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta<typeof Sponsors>;

export default meta;

type Story = StoryObj<typeof Sponsors>;

export const Default: Story = {};
