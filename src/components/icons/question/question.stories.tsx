import type { Meta, StoryObj } from "@storybook/react";
import { QuestionIcon } from "./question";

const meta = {
	title: "Icons/Question",
	component: QuestionIcon,
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
} as Meta<typeof QuestionIcon>;

export default meta;

type Story = StoryObj<typeof QuestionIcon>;

export const Default: Story = {};
