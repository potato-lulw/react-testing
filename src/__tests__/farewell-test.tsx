// we can use "test" or "it" to create a test case

//? fit to .only and xit to .skip

import { render, screen } from "@testing-library/react"
import Farewell from "../components/farewell/farewell"

//? Describe is used to group test cases.
describe('Farewell', () => {

    it("renders without name", () => {
        render(<Farewell/>)
        const farewellText = screen.getByText(/bye/i);
        expect(farewellText).toBeInTheDocument();
    })
    
    it("renders with name", () => {
        const name = 'Om';
        render(<Farewell name={name}/>)
        const farewellText = screen.getByText(/bye om/i);
        expect(farewellText).toBeInTheDocument();
    
    })
})


//? All the test cases fail. This method is called Red-Blue testing. This was the red part. Now lets do the blue part ( writing the code )