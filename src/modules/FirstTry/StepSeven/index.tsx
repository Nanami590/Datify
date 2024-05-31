import {
  FirstTryForm,
  FirstTryFormFields,
} from "@/entities/common/FirstTry/types";
import { FC, memo } from "react";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import FirstTryInfo from "../FirstTryInfo";
import { EMOJI_LIST } from "@/entities/common/constant";
import { StringHelper } from "@/utils/helpers";
import FileUploadList from "@/ui/FileUploadList";

type PropTypes = {
  value: string[];
  errors: FieldErrors<FirstTryForm>;
  setValue: UseFormSetValue<FirstTryForm>;
};

const StepSeven: FC<PropTypes> = ({ errors, setValue, value }) => {
  const handleLoad = (fileList: string[]) => {
    setValue(FirstTryFormFields.IMAGES, fileList, { shouldValidate: true });
  };

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

      <FileUploadList id="upload" onChange={handleLoad} value={value} />

      {errors.images && <p className="text-error">{errors.images.message}</p>}
    </div>
  );
};

export default memo(StepSeven);
