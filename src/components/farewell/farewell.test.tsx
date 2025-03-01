// Farewell should render the text "bye" and if a name is passed to the component it should render hello followed by the name

import { render, screen } from "@testing-library/react"
import Farewell from "./farewell"

//! Phase 1 : Write the text


test("renders farewell without name", () => {
    render(<Farewell/>)
    const farewellText = screen.getByText(/bye/i);
    expect(farewellText).toBeInTheDocument();
})

test("renders farewell with name", () => {
    const name = 'Om';
    render(<Farewell name={name}/>)
    const farewellText = screen.getByText(/bye om/i);
    expect(farewellText).toBeInTheDocument();

})


//? All the test cases fail. This method is called Red-Blue testing. This was the red part. Now lets do the blue part ( writing the code )