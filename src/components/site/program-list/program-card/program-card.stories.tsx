import type { Meta, StoryObj } from "@storybook/react";
import { ProgramCard } from "./program-card";

const meta = {
	title: "Site/ProgramList/ProgramCard",
	component: ProgramCard,
	tags: ["autodocs"],
	parameters: {
		layout: "centered",
	},
} satisfies Meta<typeof ProgramCard>;

export default meta;

type Story = StoryObj<typeof ProgramCard>;

export const Default: Story = {
	args: {
		program: {
			title: "Program Title",
			logo: "https://placehold.jp/150x150.png",
			organization: "Organization",
			placement: "Placement",
			tags: ["Tag 1", "Tag 2"],
		},
	},
};
