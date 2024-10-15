import type { Program } from "@/types/program";
import type { Meta, StoryObj } from "@storybook/react";
import { ProgramList } from "./program-list";

const meta = {
	title: "Site/ProgramList",
	component: ProgramList,
	tags: ["autodocs"],
} satisfies Meta<typeof ProgramList>;

export default meta;

type Story = StoryObj<typeof ProgramList>;

const data = Array.from({ length: 20 }, (_, i) => ({
	title: `Program ${i + 1}`,
	logo: "https://placehold.jp/150x150.png",
	organization: "Organization",
	placement: "Placement",
	tags: Array.from({ length: i }, (_, j) => `Tag ${j + 1}`),
	description: "Description",
	time: "Time",
	age: "Age",
})) satisfies Program[];

export const Default: Story = {
	args: {
		programs: data,
	},
};
