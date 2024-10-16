import type { Meta, StoryObj } from "@storybook/react";
import { ProgramTag } from "./program-tag";

const meta = {
	title: "Site/ProgramTag",
	component: ProgramTag,
	tags: ["autodocs"],
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
} satisfies Meta<typeof ProgramTag>;

export default meta;

type Story = StoryObj<typeof ProgramTag>;

export const Small: Story = {
	args: {
		tag: "Small",
		size: "sm",
	},
};

export const Medium: Story = {
	args: {
		tag: "Medium",
		size: "md",
	},
};

export const Pressed: Story = {
	args: {
		tag: "Pressed",
		pressed: true,
	},
};
