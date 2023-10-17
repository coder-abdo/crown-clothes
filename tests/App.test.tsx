import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("render the App component properly", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    const logoContainer = screen.getByTestId("logo-container")
    expect(heading).toBeDefined();
    expect(logoContainer).toBeDefined();
  });
});
