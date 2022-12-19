import React from "react";
import Field from "./Field";

type Props = Partial<React.InputHTMLAttributes<HTMLInputElement>> & {
  name: string;
  label: string;
  error?: string;
  register: any;
};

const EmailInput = ({ name, label, error = "", register, ...rest }: Props) => {
  return (
    <Field {...{ name, label, error }}>
      <input
        className="w-full text-md text-navy-700 focus:outline-navy-500 focus:outline-2 border border-navy-300  p-2 rounded"
        type="email"
        {...rest}
        {...register(name)}
      />
    </Field>
  );
};

export default EmailInput;
