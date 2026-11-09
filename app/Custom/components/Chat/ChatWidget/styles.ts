import { styled } from '@linaria/react'

export const ChatWidgetContainer = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1000;
`

export const ChatContentContainer = styled.div`
  display: grid;
  flex: 1;
  min-height: 0;
  overflow: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  /* 
    This is so the scroll is inside the container, not the entire view
  */
  height: 100%;
  overflow: auto;

  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(min-content, 1fr) auto;
  &[data-has-messages='true'] {
    grid-template-rows: minmax(0, 1fr) auto;
    align-content: start;
  }
`

export const ChatWindow = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-height: 100dvh;
  border-radius: 0;
  background:
    radial-gradient(circle at 0% 0%, #e8f0ff 0%, transparent 65%), #f5f7fb;
  color: #0f1a2e;
  box-shadow:
    0 12px 32px rgba(15, 26, 46, 0.16),
    0 0 0 1px #e3e8f1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: chatFadeIn 0.2s ease-out;
  @keyframes chatFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (min-width: 480px) {
    top: auto;
    left: auto;
    bottom: 20px;
    right: 20px;
    width: 380px;
    height: min(500px, calc(100dvh - 80px));
    max-height: calc(100dvh - 80px);
    border-radius: 16px;
    &[data-expanded='true'] {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      max-height: 100dvh;
      border-radius: 0;
    }
  }
`

export const ChatHeader = styled.div`
  padding: 12px 16px;
  flex-shrink: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e8f1;
`

export const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #0f1a2e;
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const HeaderButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5a6679;
  transition:
    color 0.2s,
    background 0.2s;

  &:hover {
    color: #2e6bff;
    background: #e8f0ff;
  }

  &:focus-visible {
    outline: 2px solid #2e6bff;
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const ExpandButton = styled(HeaderButton)`
  display: none;

  @media (min-width: 560px) {
    display: flex;
  }
`

export const CloseButton = styled(HeaderButton)``

export const ChatMessages = styled.div`
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  overflow-anchor: none;
  min-height: 0;
  padding: 20px;
  padding-bottom: calc(20px + var(--chat-response-space, 0px));

  > * {
    flex-shrink: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`

export const ChatInputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 20px max(20px, env(safe-area-inset-bottom));
  background: transparent;
  grid-row: 2;
`

export const ChatForm = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 8px 8px 8px 16px;
  box-shadow: 0 2px 8px rgba(15, 26, 46, 0.04);
  border: 1px solid #e3e8f1;

  &:focus-within {
    border-color: #2e6bff;
    box-shadow: 0 0 0 3px rgba(46, 107, 255, 0.12);
  }
`

export const ChatTextarea = styled.textarea`
  flex: 1;
  min-width: 0;
  padding: 12px 0;
  border: none;
  border-radius: 0;
  background: transparent;
  color: #0f1a2e;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  resize: none;
  min-height: 24px;
  max-height: 200px;
  line-height: 1.5;

  &::placeholder {
    color: #5a6679;
  }
`

export const SendButton = styled.button`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #e3e8f1;
  color: #5a6679;
  &[data-has-text='true'] {
    background: #2e6bff;
    color: #fff;
  }
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 0;

  &:hover:not(:disabled) {
    background: #1e55d8;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #2e6bff;
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
    margin-left: 2px;
  }
`

export const StopButton = styled.button`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #2e6bff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-size: 0;

  &:hover {
    background: #1e55d8;
  }

  &:focus-visible {
    outline: 2px solid #2e6bff;
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
`

export const TypingIndicator = styled.div`
  display: flex;
  gap: 5px;
  padding: 14px 18px;
  align-self: flex-start;
  background: #ffffff;
  border-radius: 20px;
  border-bottom-left-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  span {
    width: 8px;
    height: 8px;
    background: #2e6bff;
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`

export const WelcomeMessage = styled.div`
  text-align: center;
  padding: 32px 24px;
  min-width: 0;
  color: #5a6679;
  font-size: 1rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 1;

  h4 {
    color: #0f1a2e;
    margin: 0 0 12px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.02em;
    overflow-wrap: anywhere;
  }

  p {
    margin: 0;
    max-width: 400px;
  }
`

export const ChatButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2e6bff;
  border: none;
  cursor: pointer;
  display: flex;
  &[data-open='true'] {
    display: none;
  }
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(46, 107, 255, 0.24);
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover:not(:disabled) {
    background: #1e55d8;
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(46, 107, 255, 0.32);
  }

  &:focus-visible {
    outline: 2px solid #2e6bff;
    outline-offset: 4px;
  }

  &:disabled {
    cursor: wait;
    opacity: 0.65;
  }

  &[aria-busy='true'] svg {
    animation: chatButtonLoading 1s ease-in-out infinite alternate;
  }

  @keyframes chatButtonLoading {
    from {
      opacity: 0.35;
      transform: scale(0.85);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[aria-busy='true'] svg {
      animation: none;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
    display: block;
  }
`
