import type { Meta, StoryObj } from "@storybook/react";
import { AdmissionInfo } from "./admission-info";

export default {
	title: "Site/AdmissionInfo",
	component: AdmissionInfo,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
} as Meta;

type Story = StoryObj<typeof AdmissionInfo>;

export const Default: Story = {};
