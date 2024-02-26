
type IconProps = {
  iconName: string;
};

const Icon = ({ iconName }: IconProps) => {
  return (
    <>
      <i className={`ri-${iconName}`}></i>
    </>
  );
};

export default Icon;
