import { render, screen } from '@testing-library/react';
import App from './App'; 

describe('Teste do componente principal', () => {
  test('Renderizando', () => {
    render(<App />); 
    expect(screen.getByText('Cadastrar')).toBeInTheDocument(); 
  });
});
