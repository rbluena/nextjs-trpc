type Props = {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
};

const Field = ({ label, name, error = "", children }: Props) => {
  return (
    <div className="">
      <label className="text-sm text-navy-700 font-semibold" htmlFor={name}>
        {label}
      </label>
      <div>{children}</div>
      {error?.length ? <span>{error}</span> : null}
    </div>
  );
};

export default Field;
