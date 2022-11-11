import React from 'react';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import DropzonePreview from 'components/dropzone/DropzonePreview';

const DropzoneTextFiles = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  const onChangeStatus = (fileWithMeta, status) => {
    console.log(fileWithMeta);
    console.log(status);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      PreviewComponent={DropzonePreview}
      submitButtonContent={null}
      accept="text/*"
      submitButtonDisabled
      SubmitButtonComponent={null}
      inputWithFilesContent={null}
      onChangeStatus={onChangeStatus}
      classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Drop Files"
    />
  );
};

export default DropzoneTextFiles;
