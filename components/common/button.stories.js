// Button.stories.js

import React from "react";

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
