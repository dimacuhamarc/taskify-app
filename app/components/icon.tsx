import { cn } from "~/utilities/tw-utils";

type IconProps = {
  iconName: string;
  className?: string;
};

const Icon = ({ iconName, className }: IconProps) => {
  return (
    <>
      <i className={cn(`ri-${iconName}`,className)}></i>
    </>
  );
};

export default Icon;
