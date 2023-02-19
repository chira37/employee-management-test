import { render, screen } from "@testing-library/react";

import ConfirmDialog from "./index";

describe("ConfirmDialog", () => {
  it("render", () => {
    render(
      <ConfirmDialog
        open
        title="Test Title"
        description="Test Description"
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
      />
    );
    const titleElement = screen.getByText("Test Title");
    const descriptionElement = screen.getByText("Test Description");
    expect(titleElement).toBeInTheDocument;
    expect(descriptionElement).toBeInTheDocument;
  });
});
