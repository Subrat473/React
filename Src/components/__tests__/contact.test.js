import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";

test("should load Contact Us component", () => {
    render(<Contact />);

    // Select the heading
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
});

test("should load button inside Contact component", () => {
    render(<Contact />);

    // Select the button
    const button = screen.getByText("Submit");

    // Assertion
    expect(button).toBeInTheDocument();
});
