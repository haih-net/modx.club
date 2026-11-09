import { styled } from '@linaria/react'

export const LovableButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid transparent;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 120ms ease,
    border-color 120ms ease,
    color 120ms ease;
  width: auto;
  height: 42px;
  padding: 0 24px;
  font-size: 15px;
  background: #2e6bff;
  color: #fff;
  box-shadow: 0 1px 2px rgba(15, 26, 46, 0.06);
  &:hover:not(:disabled) {
    background: #1e55d8;
  }
  &[data-full-width='true'] {
    width: 100%;
  }
  &[data-size='sm'] {
    height: 34px;
    padding: 0 16px;
    font-size: 13px;
  }
  &[data-size='lg'] {
    height: 52px;
    padding: 0 32px;
    font-size: 17px;
  }
  &[data-variant='secondary'] {
    background: #fff;
    color: #0f1a2e;
    border-color: #e3e8f1;
    &:hover:not(:disabled) {
      background: #f0f3f9;
      border-color: #cbd3e1;
    }
  }
  &[data-variant='ghost'] {
    background: transparent;
    color: #0f1a2e;
    box-shadow: none;
    &:hover:not(:disabled) {
      background: #f0f3f9;
    }
  }
  &[data-variant='dark'] {
    background: #0b1224;
    color: #e7ecf5;
    box-shadow: none;
    &:hover:not(:disabled) {
      background: #101a33;
    }
  }
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }
`
export const LovableButtonIconStyled = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: 1.1em;
`
