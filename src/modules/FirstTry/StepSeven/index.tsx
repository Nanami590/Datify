import { FirstTryForm } from "@/entities/common/FirstTry/types";
import { FC } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import { EMOJI_LIST } from "@/entities/common/constant";
import { StringHelper } from "@/utils/helpers";
import FileUploadList from "@/ui/FileUploadList";

type PropTypes = {
  value: unknown[];
  errors: FieldErrors<FirstTryForm>;
  setValue: UseFormSetValue<FirstTryForm>;
};

const StepSeven: FC<PropTypes> = ({ errors, setValue, value }) => {
  return (
    <div className="first-try__step-six">
      <FirstTryInfo
        title={`Show your best self ${StringHelper.getEmoji(
          EMOJI_LIST.CAMERA
        )}`}
        description={
          "Upload up to six your best photos to make a fantastic first impression. Let your personality shine."
        }
      />

      <FileUploadList id="upload" />
    </div>
  );
};

export default StepSeven;
