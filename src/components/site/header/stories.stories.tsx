import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./header";

const meta = {
	title: "Site/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
		nextjs: {
			appDirectory: true,
		},
	},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const TopPage: Story = {
	parameters: {
		nextjs: {
			navigation: {
				pathname: "/",
			},
		},
	},
};

export const OtherPage: Story = {
	parameters: {
		nextjs: {
			navigation: {
				pathname: "/visitor",
			},
		},
	},
};
