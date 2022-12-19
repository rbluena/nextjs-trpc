type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="font-inter">{children}</div>;
};

export default Layout;
