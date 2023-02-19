import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Input, { InputProps } from "./index";
import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

const MockInput = (props: InputProps) => {
  const { control } = useForm();
  return <Input control={control} {...props} />;
};

describe("Input", () => {
  it("render", () => {
    render(<MockInput name="test" placeholder="test input" />);
    const inputElement = screen.getByPlaceholderText("test input");
    expect(inputElement).toBeInTheDocument;
  });

  it("add input text", async () => {
    render(<MockInput name="test" placeholder="test placeholder" />);
    const inputElement = screen.getByTestId("test");
    await userEvent.type(inputElement, "test input");
    expect(screen.getByDisplayValue("test input"));
  });
});
