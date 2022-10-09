import { render, screen } from '@testing-library/react';
import React from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('toBeInTheDocument', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('toHaveClass', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
