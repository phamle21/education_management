import React, { useState } from 'react';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import DropzonePreview from 'components/dropzone/DropzonePreview';

const DropzoneFloatingLabel = ({ label }) => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });
  const [count, setCount] = useState(0);

  const onChangeStatus = (fileWithMeta, status) => {
    console.log(fileWithMeta);
    console.log(status);
    if (status === 'preparing') {
      setCount(count + 1);
    }
    if (status === 'removed') {
      setCount(count - 1);
    }
  };

  return (
    <div className="form-floating">
      <Dropzone
        getUploadParams={getUploadParams}
        PreviewComponent={DropzonePreview}
        submitButtonContent={null}
        accept="image/*"
        submitButtonDisabled
        SubmitButtonComponent={null}
        inputWithFilesContent={null}
        onChangeStatus={onChangeStatus}
        classNames={{
          inputLabelWithFiles: defaultClassNames.inputLabel,
          dropzone: `${defaultClassNames.dropzone} ${count > 0 ? 'full' : ''}`,
        }}
        inputContent=""
      />
      <label>{label}</label>
    </div>
  );
};

export default DropzoneFloatingLabel;
