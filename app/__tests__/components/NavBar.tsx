import {render, screen} from '@testing-library/react';
import { Navbar } from '@/components/navbar/Navbar';
import { Providers } from '@/store/Providers';

describe('Top Menu', () => {

  beforeEach(() => {});

  it('Renders Top Menu', () => {
    render(
      <Providers>
        <Navbar />
      </Providers>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  })
});