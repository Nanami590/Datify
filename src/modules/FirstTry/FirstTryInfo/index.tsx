import { FC, ReactNode, memo } from "react";

type PropTypes = {
  title: ReactNode;
  className?: string;
  description: ReactNode;
};

const FirstTryInfo: FC<PropTypes> = ({ description, title, className }) => {
  return (
    <div className={className}>
      <h4 className="mb-6 mt-6">{title}</h4>

      <p>{description}</p>
    </div>
  );
};

export default memo(FirstTryInfo);
