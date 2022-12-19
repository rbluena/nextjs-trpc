type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Submit = ({ children, ...rest }: Props) => {
  return (
    <button
      className="bg-blue-700 w-full text-slate-50 p-4 rounded disabled:bg-navy-300"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Submit;
