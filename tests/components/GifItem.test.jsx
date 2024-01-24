import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Test in <GifItem/>', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    test('should match snapshot', () => {

        const { container } = render( <GifItem title={title} url={url}/> );
        expect( container ).toMatchSnapshot();

    });

    test('should show image and url indicated', () => {
        render( <GifItem title={title} url={url}/> );
        // screen.debug();                                             //Mostrar lo que este en pantalla
        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('should show the title in the component', () => {

        render( <GifItem title={title} url={url}/> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});
