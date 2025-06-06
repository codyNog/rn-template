import type { Meta, StoryObj } from "@storybook/react";
import { I18nProvider } from "shared/libs/i18n";
import { getCanvas } from "shared/libs/storybook";
import { Foo as Component } from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Ja: Story = {
  args: {},
  render: (args) => (
    <I18nProvider locale={"ja"}>
      <Component {...args} />
    </I18nProvider>
  ),
};

export const En: Story = {
  args: {},
  render: (args) => (
    <I18nProvider locale={"en"}>
      <Component {...args} />
    </I18nProvider>
  ),
};

export const Behavior: Story = {
  args: {},
  render: (args) => (
    <I18nProvider locale={"ja"}>
      <Component {...args} />
    </I18nProvider>
  ),
  play: async ({ canvasElement }) => {
    const canvas = getCanvas(canvasElement);
    expect(canvas).toBeTruthy();
  },
};
