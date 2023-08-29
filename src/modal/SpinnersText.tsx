// @ts-nocheck
const SpinnersText = ({ text }) => {
  return (
    <div class="text-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">{text}</span>
      </div>
    </div>
  );
};

export default SpinnersText;
