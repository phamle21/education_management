/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import Dropzone, { defaultClassNames } from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import DropzonePreview from 'components/dropzone/DropzonePreview';

const DropzoneInitialFile = () => {
  const filePaths = React.useMemo(() => ['/img/product/small/product-1.webp', '/img/product/small/product-2.webp'], []);
  const [files, setFiles] = useState([]);

  const loadFile = (path) => {
    return new Promise((resolve, reject) => {
      fetch(path).then((res) => {
        res.arrayBuffer().then((buf) => {
          return resolve(new File([buf], 'image_data_url.webp', { type: 'image/jpeg' }));
        });
      });
    });
  };

  const loadFiles = useCallback(() => {
    const promises = filePaths.map((path) => {
      return loadFile(path);
    });
    Promise.all(promises).then((newFiles) => setFiles(newFiles));
  }, [filePaths]);

  useEffect(() => {
    loadFiles();
    return () => setFiles([]);
  }, [loadFiles]);

  const getUploadParams = () => ({ url: 'https://httpbin.org/post' });

  const onChangeStatus = (fileWithMeta, status) => {
    // console.log(fileWithMeta);
    // console.log(status);
  };

  return (
    <Dropzone
      initialFiles={files}
      getUploadParams={getUploadParams}
      PreviewComponent={DropzonePreview}
      submitButtonContent={null}
      accept="image/*"
      submitButtonDisabled
      SubmitButtonComponent={null}
      inputWithFilesContent={null}
      onChangeStatus={onChangeStatus}
      classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent="Drop Files"
    />
  );
};

export default DropzoneInitialFile;
