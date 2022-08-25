import useCountdown from "./useCountdown";
import targetDate from "../data/targetDate";
import React from "react";
import { renderHook } from "@testing-library/react";

const mockDate = [0, 1, 2, 3, 4];

jest.mock("../utils/timeCalculate", () => () => mockDate);

describe("s", () => {
  describe("s", () => {
    test("s", () => {
      const setStateMock = jest.fn();
      const useStateMock: any = (useState: any) => [useState, setStateMock];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      jest.useFakeTimers();

      const countDownDate = targetDate.getTime();
      renderHook(() => useCountdown(targetDate));
      jest.advanceTimersByTime(1000);
      const finalDate = countDownDate - new Date().getTime();

      expect(setStateMock).toHaveBeenCalledWith(finalDate);
    });

    test("f", () => {
      const setStateMock = jest.fn();
      const useStateMock: any = (useState: any) => [useState, setStateMock];
      jest.spyOn(React, "useState").mockImplementation(useStateMock);

      const {
        result: { current },
      } = renderHook(() => useCountdown(targetDate));

      expect(current).toBe(mockDate);
    });
  });
});
