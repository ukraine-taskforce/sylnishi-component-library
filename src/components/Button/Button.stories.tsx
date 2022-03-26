import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Sylnishi/Controls/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Test</Button>;

export const Button1 = Template.bind({});
Button1.args = {
  btnType: "primary",
};

export const Button2 = Template.bind({});
Button2.args = {
  btnType: "secondary",
};
