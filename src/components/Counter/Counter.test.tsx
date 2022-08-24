import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

const date = { days: 0, hours: 1, minutes: 2, seconds: 3, countDown: 4 };

jest.mock("../../hooks/useCountdown", () => () => [
  date.days,
  date.hours,
  date.minutes,
  date.seconds,
  date.countDown,
]);

describe("Given a counter component", () => {
  describe("When it is called", () => {
    test("Then the deays should be on the document", () => {
      render(<Counter />);

      const element = screen.getByText(date.days);

      expect(element).toBeInTheDocument();
    });

    test("Then the hours should be on the document", () => {
      render(<Counter />);

      const element = screen.getByText(date.hours);

      expect(element).toBeInTheDocument();
    });

    test("Then the minutes should be on the document", () => {
      render(<Counter />);

      const element = screen.getByText(date.minutes);

      expect(element).toBeInTheDocument();
    });

    test("Then the seconds should be on the document", () => {
      render(<Counter />);

      const element = screen.getByText(date.seconds);

      expect(element).toBeInTheDocument();
    });

    test("Then, if countdows is less 0 or less it shouldn't be on the document any of the date indicators", async () => {
      date.countDown = 0;
      await render(<Counter />);
      const element = screen.queryByText(date.seconds);

      expect(element).not.toBeInTheDocument();
    });
  });
});
