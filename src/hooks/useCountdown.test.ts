import useCountdown from "./useCountdown";
import targetDate from "../data/targetDate";
import React from "react";
import { renderHook } from "@testing-library/react";

const mockDate = [0, 1, 2, 3, 4];

jest.mock("../utils/timeCalculate", () => () => mockDate);

describe("Given a useCounDown custom hook", () => {
  describe("When it is calles", () => {
    test("Then it should call de setStat of the use satet with the coun dwon date les the actual date", () => {
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

    test("Then it should return the return value of time calculate function", () => {
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
