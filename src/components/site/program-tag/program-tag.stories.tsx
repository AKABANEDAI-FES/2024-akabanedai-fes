import type { Meta, StoryObj } from "@storybook/react";
import { ProgramTag } from "./program-tag";

const meta = {
	title: "Site/ProgramTag",
	component: ProgramTag,
	tags: ["autodocs"],
} satisfies Meta<typeof ProgramTag>;

export default meta;

type Story = StoryObj<typeof ProgramTag>;

export const Small: Story = {
	args: {
		children: "Small",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		children: "Medium",
		size: "md",
	},
};
