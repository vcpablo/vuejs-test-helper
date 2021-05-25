import "@testing-library/jest-dom/extend-expect";
import { customRender } from "@/utils/test";
import Status from "@/components/Status";

describe("Status", () => {
  it('should display a red label "Finished with errors" if status is equal to "error"', () => {
    const { getByTestId } = customRender(Status, {
      props: { status: "error" },
    });

    const statusLabel = getByTestId("status-label");
    expect(statusLabel).toHaveClass("Status__error");
    expect(statusLabel).toHaveTextContent("Finished with errors");
  });

  it('should display an orange label "Finished with warnings" if status is equal to "warning"', () => {
    const { getByTestId } = customRender(Status, {
      props: { status: "warning" },
    });

    const statusLabel = getByTestId("status-label");

    expect(statusLabel).toHaveClass("Status__warning");
    expect(statusLabel).toHaveTextContent("Finished with warnings");
  });

  it('should display a green label "Finished" if status is equal to "success"', () => {
    const { getByTestId } = customRender(Status, {
      props: { status: "success" },
    });

    const statusLabel = getByTestId("status-label");

    expect(statusLabel).toHaveClass("Status__success");
    expect(statusLabel).toHaveTextContent("Finished");
  });
});
