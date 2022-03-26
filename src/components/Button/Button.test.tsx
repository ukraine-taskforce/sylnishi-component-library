import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ThemeProvider } from "@emotion/react";
import { SylnishiTheme } from "../../theming";

describe("Button", () => {
  it("renders the Button component", () => {
    render(
      <ThemeProvider theme={SylnishiTheme as any}>
        <Button>test</Button>
      </ThemeProvider>
    );
  });
});
