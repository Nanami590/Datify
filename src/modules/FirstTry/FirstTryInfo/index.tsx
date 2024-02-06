import { FC, ReactNode, memo } from "react";

type PropTypes = {
  title: ReactNode;
  description: ReactNode;
};

const FirstTryInfo: FC<PropTypes> = ({ description, title }) => {
  return (
    <div>
      <h4 className="mb-6 mt-6">{title}</h4>

      <p>{description}</p>
    </div>
  );
};

export default memo(FirstTryInfo);
