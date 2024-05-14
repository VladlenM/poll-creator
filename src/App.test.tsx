import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './component/common/Button';

describe('UI TESTS', () => {
  it('test button for props', () => {
    render(<Button id="test-button" onClick={() => {}} label="Test Label" />);

    const buttonElement = screen.getByText('Test Button Label');
    expect(buttonElement).toBeInTheDocument();
  });
});
