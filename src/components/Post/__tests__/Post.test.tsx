import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from '..';

test('Deve renderizar o componente Post', async () => {
  const imageUrl = 'https://example.com/image.jpg';

  render(<Post imageUrl={imageUrl} imageAlt={'Alt teste'}>Texto para teste de componente</Post>);

  const imageElement = await screen.findByAltText('Alt teste');
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute('src', imageUrl);

  const postTextElement = screen.getByText('Texto para teste de componente');
  expect(postTextElement).toBeInTheDocument();
});
