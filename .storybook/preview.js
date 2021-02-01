import React from "react"
import { action } from "@storybook/addon-actions"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../src/global/GlobalStyle"
import theme from "../src/global/theme"

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
global.__BASE_PATH__ = "/"

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
]

// .storybook/preview.js

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      {
        name: "white",
        value: "#FFFFFF",
      },
      {
        name: "pink",
        value: "#E7816B",
      },
    ],
  },
}
