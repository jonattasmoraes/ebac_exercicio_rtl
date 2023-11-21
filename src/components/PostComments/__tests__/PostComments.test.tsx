import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    test('Deve adicionar "Texto teste" a lista', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('textarea-id'), {
            target: {
                value: 'Texto teste' 
            },
        });
        fireEvent.click(screen.getByTestId('button-add'));
        expect(screen.getByText('Texto teste')).toBeInTheDocument();
    });
});