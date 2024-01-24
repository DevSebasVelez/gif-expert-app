import { render, renderHook, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Test in <GifGrid/>', () => {

    const category = 'One Punch';

    test('should show loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })


        render( <GifGrid category={category}/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
        // screen.debug();
    });

    test('should show items when images have load by useFetchGifs', () => {

        const gifs = [
            {
                id:    'ABC',
                title: 'ABC',
                url:   'ABC',
            },
            {
                id:    'ABCD',
                title: 'ABCD',
                url:   'ABCD',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,

        });

        render( <GifGrid category={category}/> );

        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});
