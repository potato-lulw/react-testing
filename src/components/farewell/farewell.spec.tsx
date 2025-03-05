// RCA searces for .test.* , .spec.* and __test__ directory at any depth in the file tree. 

import { render, screen } from "@testing-library/react"
import Farewell from "./farewell"

//? Describe is used to group test cases.
describe('Farewell', () => {

    test("renders without name", () => {
        render(<Farewell/>)
        const farewellText = screen.getByText(/bye/i);
        expect(farewellText).toBeInTheDocument();
    })
    
    test("renders with name", () => {
        const name = 'Om';
        render(<Farewell name={name}/>)
        const farewellText = screen.getByText(/bye om/i);
        expect(farewellText).toBeInTheDocument();
    
    })
})


//? All the test cases fail. This method is called Red-Blue testing. This was the red part. Now lets do the blue part ( writing the code )