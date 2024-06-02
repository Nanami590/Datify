import { FC } from "react";
import FirstTryInfo from "../FirstTryInfo";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";

const StepEight: FC = () => {
  return (
    <div className="first-try__step-eight">
      <div className="first-try__step-eight__icon">
        <RoomOutlinedIcon />
      </div>

      <FirstTryInfo
        title={"Enable Location"}
        className={"first-try__step-eight__description"}
        description={
          "You need to enable location to be able to use the Datify app."
        }
      />
    </div>
  );
};

export default StepEight;
