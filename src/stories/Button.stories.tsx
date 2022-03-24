import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UGTComponents/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Button1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Button1.args = {
  label: "Button",
};

export const Button2 = Template.bind({});
Button2.args = {
  label: "Button2",
};
