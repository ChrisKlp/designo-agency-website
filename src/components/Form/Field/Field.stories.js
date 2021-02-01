import React from "react"
import { PureField } from "./Field"
import styled from "styled-components"
import errorIcon from "../../../assets/contact/desktop/icon-error.svg"

const Wrapper = styled.div`
  max-width: 40rem;
`
export default {
  title: "Form/Field",
  component: PureField,
  argTypes: {},
  parameters: {
    backgrounds: { default: "pink" },
  },
  decorators: [
    Story => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
}

const Template = args => <PureField {...args} errorIcon={errorIcon} />

export const Placeholder = Template.bind({})
Placeholder.args = {
  name: "name",
  value: "",
}

export const Filled = Template.bind({})
Filled.args = {
  value: "Filled Form",
  name: "name",
}

export const Error = Template.bind({})
Error.args = {
  name: "name",
  errorMessage: "Can’t be empty",
  value: "",
}
