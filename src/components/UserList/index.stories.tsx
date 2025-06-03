import type { Meta, StoryObj } from "@storybook/react";
import { getCanvas } from "shared/libs/storybook";
import { UserList as Component } from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Ja: Story = {
  args: {},
  render: (args) => <Component {...args} />,
};

export const En: Story = {
  args: {},
  render: (args) => <Component {...args} />,
};

export const Behavior: Story = {
  args: {},
  render: (args) => <Component {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = getCanvas(canvasElement);
    expect(canvas).toBeTruthy();
  },
};
