import React from "react"
import Button from "./Button"

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {},
}

const Template = args => <Button {...args}>Learn More</Button>

export const Primary = Template.bind({})
Primary.parameters = {
  backgrounds: { default: "pink" },
}
Primary.args = {}

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
}
