/* eslint-disable react-hooks/exhaustive-deps */
import classNames from "classnames";
import { FC, Fragment, SyntheticEvent, useEffect, useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { deepEqual } from "@/utils/helpers/deepEqual";

type PropTypes = {
  id: string;
  className?: string;
  listCount?: number;
  value: string[];
  onChange?: (fileList: string[]) => void;
};

// TODO multiple file loading
const FileUploadList: FC<PropTypes> = ({
  id,
  onChange,
  className,
  value = [],
  listCount = 6,
}) => {
  const [fileList, setFileList] = useState<string[]>(value);

  const handleChange = async (event: SyntheticEvent) => {
    const files = (event.target as HTMLInputElement).files;

    if (files) {
      Array.from(files).map((item) =>
        fileToDataUri(item).then((dataURI: string | unknown) => {
          setFileList((prevState) => [...prevState, dataURI as string]);

          return dataURI;
        })
      );
    }
  };

  const handleRemove = (index: number) => () => {
    setFileList((prevState) => {
      const newState = [...prevState];
      const input = document.getElementById(`${id}-${index}`);

      newState[index] = "";

      if (input) {
        (input as HTMLInputElement).value = "";
      }

      return newState.filter((item) => !!item);
    });
  };

  useEffect(() => {
    if (onChange && !deepEqual(fileList, value)) {
      onChange(fileList);
    }
  }, [fileList]);

  useEffect(() => {
    if (!deepEqual(fileList, value)) {
      setFileList(value);
    }
  }, [value]);

  return (
    <div className={classNames("file-upload-list", className)}>
      {[...new Array(listCount).fill("")].map((_, index) => (
        <Fragment key={index}>
          {!!fileList[index] && (
            <div className="file-upload-list__image">
              <CloseSharpIcon
                className="file-upload-list__image_icon"
                onClick={handleRemove(index)}
              />

              <img src={fileList[index]} />
            </div>
          )}

          {!fileList[index] && (
            <>
              <label
                htmlFor={`${id}-${index}`}
                className="file-upload-list__input"
              >
                <AddSharpIcon />
              </label>

              <input
                type={"file"}
                id={`${id}-${index}`}
                onChange={handleChange}
              />
            </>
          )}
        </Fragment>
      ))}
    </div>
  );
};

function fileToDataUri(file: File) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      resolve(event.target?.result);
    };

    reader.readAsDataURL(file);
  });
}

export default FileUploadList;
