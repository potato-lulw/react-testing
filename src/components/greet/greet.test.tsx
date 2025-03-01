import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test("renders greet", () => {
    render(<Greet/>)
    const greetElement = screen.getByText(/hello/i)
    expect(greetElement).toBeInTheDocument();
})