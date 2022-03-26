import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import IconFlag from "./Flag";

export default {
  title: "Sylnishi/Icons/IconFlag",
  component: IconFlag,
} as ComponentMeta<typeof IconFlag>;

const Template: ComponentStory<typeof IconFlag> = (args) => <IconFlag {...args} />;

export const FlagCZ = Template.bind({});
FlagCZ.args = {
  iso: "cz",
  rfc: "cs",
};

export const FlagDE = Template.bind({});
FlagDE.args = {
  iso: "de",
  rfc: "de",
};

export const FlagGB = Template.bind({});
FlagGB.args = {
  iso: "gb",
  rfc: "en",
};

export const FlagHU = Template.bind({});
FlagHU.args = {
  iso: "hu",
  rfc: "hu",
};

export const FlagIT = Template.bind({});
FlagIT.args = {
  iso: "it",
  rfc: "it",
};

export const FlagPL = Template.bind({});
FlagPL.args = {
  iso: "pl",
  rfc: "pl",
};

export const FlagUA = Template.bind({});
FlagUA.args = {
  iso: "ua",
  rfc: "uk",
};

export const FlagNotFound = Template.bind({});
FlagNotFound.args = {
  iso: "-",
  rfc: "-",
};
