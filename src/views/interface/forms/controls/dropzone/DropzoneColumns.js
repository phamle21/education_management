import React from 'react';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import DropzoneColumnPreview from 'components/dropzone/DropzoneColumnPreview';

const DropzoneColumns = () => {
  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  const onChangeStatus = (fileWithMeta, status) => {
    console.log(fileWithMeta);
    console.log(status);
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      PreviewComponent={DropzoneColumnPreview}
      submitButtonContent={null}
      accept="image/*"
      submitButtonDisabled
      SubmitButtonComponent={null}
      inputWithFilesContent={null}
      onChangeStatus={onChangeStatus}
      classNames={{
        inputLabelWithFiles: defaultClassNames.inputLabel,
        dropzone: `${defaultClassNames.dropzone} row g-2 row-cols-1 row-cols-md-3 row-cols-xl-5`,
      }}
      inputContent="Drop Files"
    />
  );
};

export default DropzoneColumns;
