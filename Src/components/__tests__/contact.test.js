import { render, screen } from "@testing-library/react";
import Contact from "../contact";
import "@testing-library/jest-dom";


describe ("Contact Us Page Test Case", () => {
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

test("should load input name inside Contact component", () => {
    render(<Contact />);

    // Select the name input field by its placeholder text
    const nameInput = screen.getByPlaceholderText("Name");

    // Assertion
    expect(nameInput).toBeInTheDocument();
});

test("should load 2 input boxes inside Contact component", () => {
    render(<Contact />);

    // Select input fields by their placeholders
    const nameInput = screen.getByPlaceholderText("Name");
    const messageInput = screen.getByPlaceholderText("Message");

    // Assertions
    expect(nameInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
});

});