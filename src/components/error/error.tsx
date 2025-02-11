import styled from "styled-components";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

const ErrorContainer = styled.div`
  padding: 20px;
  background-color: #ffe5e5;
  color: #b00000;
  border: 1px solid #ffcccc;
  border-radius: 8px;
  margin: 20px;
  text-align: center;
`;

const RetryButton = styled.button`
  background-color: #b00000;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;

const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => (
  <ErrorContainer>
    <p>{message}</p>
    {onRetry && <RetryButton onClick={onRetry}>Retry</RetryButton>}
  </ErrorContainer>
);

export default ErrorMessage;
