import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Test in <AddCategory/>', () => {
    test('should change the value of input', () => {

        render( <AddCategory  onNewCategory={ () => {} }/> );
        // screen.debug();
        const input = screen.getByRole('textbox');


        fireEvent.input( input, { target: {value: 'Saitama'} } );

        expect( input.value ).toBe('Saitama');
    });


    test('should call onNewCategory if input has a value', () => {

        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();        //mock

        render( <AddCategory  onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');         //El input toma el ultimo valor del componente, y en el componente lo reiniciamos asi que   debe ser igual a un string vacío después del submit (enter)

        expect( onNewCategory ).toHaveBeenCalled();                  //Que haya sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1);            //Que haya sido llamada n cantidad de veces
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );  //Que haya sido llamada con el valor:

    });


    test('should not call the function onNewCategory if input is empty ', () => {

        const inputValue = '';
        const onNewCategory = jest.fn();

        render( <AddCategory  onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    })

});
