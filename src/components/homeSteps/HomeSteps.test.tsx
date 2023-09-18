import { render, screen, waitFor, within } from "@testing-library/react";
import { HomeSteps } from "./HomeSteps";

test("renders steps heading", () => {
  render(<HomeSteps />);
  const linkElement = screen.getByText(/how it works/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 4 steps in specific order", async () => {
  render(<HomeSteps />);

  await waitFor(() => {
    const rows = screen.getAllByTestId("homeStep");

    expect(within(rows[0]).queryByText("01")).toBeInTheDocument();
    expect(within(rows[1]).queryByText("02")).toBeInTheDocument();
    expect(within(rows[2]).queryByText("03")).toBeInTheDocument();
    expect(within(rows[3]).queryByText("04")).toBeInTheDocument();
  });
});
