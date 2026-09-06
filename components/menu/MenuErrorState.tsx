type Props = {
  message: string;
  onRetry?: () => void;
};

export default function MenuErrorState({ message, onRetry }: Props) {
  return (
    <div className="mt-10 rounded-[14px] border border-border-light bg-bg-soft px-6 py-10 text-center sm:px-10">
      <p className="font-serif text-2xl font-medium text-text-primary sm:text-3xl">
        Menu unavailable
      </p>
      <p className="mx-auto mt-3 max-w-lg font-sans text-[14px] leading-relaxed text-text-secondary">
        {message}
      </p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="btn-soft mt-6 inline-flex items-center justify-center bg-pink-primary px-7 py-3 font-sans text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-rose-deep"
        >
          Try again
        </button>
      ) : null}
    </div>
  );
}
