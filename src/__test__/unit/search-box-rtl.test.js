import { screen, render, fireEvent } from "@testing-library/react";
import SearchBox from "../../components/search_box";
import "@testing-library/jest-dom/extend-expect";

describe("SearchBox", () => {
  test("Input should be present in the DOM", () => {
    render(<SearchBox />);

    const inputElement = screen.getByPlaceholderText(/anuv jain/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("Should change value when input changed", () => {
    render(<SearchBox />);

    const inputElement = screen.getByPlaceholderText("anuv jain");
    fireEvent.change(inputElement, {
      target: {
        value: "Salman Elahi",
      },
    });

    expect(inputElement.value).toBe("Salman Elahi");
  });

  test("Button should be present in the dom", () => {
    render(<SearchBox />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("Button should be disabled when input value is empty string", () => {
    render(<SearchBox />);

    const inputElement = screen.getByPlaceholderText("anuv jain");
    fireEvent.change(inputElement, {
      target: {
        value: "   ",
      },
    });

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveAttribute("disabled");
  });

  test("Button should working when input value is valid string", () => {
    render(<SearchBox />);

    const inputElement = screen.getByPlaceholderText("anuv jain");
    fireEvent.change(inputElement, {
      target: {
        value: "  hi ",
      },
    });

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).not.toHaveAttribute("disabled");
  });
});
