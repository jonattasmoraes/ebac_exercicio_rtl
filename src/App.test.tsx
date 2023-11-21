import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste para o componente App', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<App/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
})
