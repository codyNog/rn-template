import type { Meta, StoryObj } from "@storybook/react";
import { I18nProviderClient } from "shared/libs/i18n/client";
import { getCanvas } from "shared/libs/storybook";
import { BottomTabs as Component } from ".";

const meta: Meta<typeof Component> = {
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Ja: Story = {
  args: {},
  render: (args) => (
    <I18nProviderClient locale={"ja"}>
      <Component {...args} />
    </I18nProviderClient>
  ),
};

export const En: Story = {
  args: {},
  render: (args) => (
    <I18nProviderClient locale={"en"}>
      <Component {...args} />
    </I18nProviderClient>
  ),
};

export const Behavior: Story = {
  args: {},
  render: (args) => (
    <I18nProviderClient locale={"ja"}>
      <Component {...args} />
    </I18nProviderClient>
  ),
  play: async ({ canvasElement }) => {
    const canvas = getCanvas(canvasElement);
    expect(canvas).toBeTruthy();
  },
};