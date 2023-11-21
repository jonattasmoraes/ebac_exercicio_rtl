import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Teste para o componente PostComment', () => {
    test('Deve adicionar dois comentários à lista', () => {
        render(<App />);

        fireEvent.change(screen.getByTestId('textarea-id'), {
        target: {
            value: 'Texto teste 1',
        },
        });
        fireEvent.click(screen.getByTestId('button-add-id'));
        expect(screen.getByText('Texto teste 1')).toBeInTheDocument();

        fireEvent.change(screen.getByTestId('textarea-id'), {
        target: {
            value: 'Texto teste 2',
        },
        });
        fireEvent.click(screen.getByTestId('button-add-id'));
        expect(screen.getByText('Texto teste 2')).toBeInTheDocument();
    });
});
