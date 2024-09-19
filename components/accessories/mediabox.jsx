const MediaBox = ({ children, className }) => {
  return (
    <div
      className={`shadow-lg rounded-md px-3 py-2 w-fit cursor-pointer bg-brandPurple ${className}`}
    >
      {children}
    </div>
  );
};

export default MediaBox;
