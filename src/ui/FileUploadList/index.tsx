import classNames from "classnames";
import { FC, Fragment, SyntheticEvent, useState } from "react";
import AddSharpIcon from "@mui/icons-material/AddSharp";

type PropTypes = {
  id: string;
  className?: string;
  listCount?: number;
};

// TODO stylize
// TODO types
const FileUploadList: FC<PropTypes> = ({ className, id, listCount = 6 }) => {
  const [fileList, setFileList] = useState<string[]>([]);

  const handleChange = async (event: SyntheticEvent) => {
    const files = (event.target as HTMLInputElement).files;

    Array.from(files).map((item) =>
      fileToDataUri(item).then((dataURI) => {
        setFileList((prevState) => [...prevState, dataURI]);
      })
    );

    // if (files) {
    //   setFileList(Array.from(files));
    // }
  };

  console.log(fileList);

  return (
    <div className={classNames("file-upload-list", className)}>
      {[...new Array(listCount).fill(1)].map((_, index) => (
        <Fragment key={index}>
          {!!fileList[index] && (
            <img src={fileList[index]} className="file-upload-list__image" />
          )}

          {!fileList[index] && (
            <label htmlFor={id} className="file-upload-list__input">
              <AddSharpIcon />
            </label>
          )}
        </Fragment>
      ))}

      <input id={id} type={"file"} multiple onChange={handleChange} />
    </div>
  );
};

function fileToDataUri(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event: SyntheticEvent) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });
}

export default FileUploadList;
