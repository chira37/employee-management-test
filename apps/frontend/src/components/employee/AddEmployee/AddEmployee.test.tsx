import React from "react";
import { render, screen, within } from "@testing-library/react";
import AddEmployee from "./index";
import userEvent from "@testing-library/user-event";
jest.mock("next/router", () => require("next-router-mock"));

describe("AddEmployee", () => {
  it("tte validation", async () => {
    render(<AddEmployee />);

    const lastName = screen.getByTestId("lastName");
    await userEvent.type(lastName, "warner");

    const email = screen.getByTestId("email");
    await userEvent.type(email, "test@gmail.com");

    const phone = screen.getByTestId("phone");
    await userEvent.type(phone, "+94123456789");

    const gender = screen.getByTestId("gender");
    await userEvent.click(within(gender).getByRole("button"));
    await userEvent.click(screen.getByRole("option", { name: /^m/i }));

    const submit = screen.getByText("Add");
    await userEvent.click(submit);

    expect(screen.getByText("firstName must be at least 6 characters"));

  });
});
