import { useState, useCallback } from 'react';

import { fade, makeStyles } from '@material-ui/core/styles';

import { useDropzone } from 'react-dropzone';

// components
import Typography from '@material-ui/core/Typography';
import LoadingButton from 'components/shared/LoadingButton';

// constants
import { SPACING_HALF, SPACING_LEAST } from 'constants/spacing';

// utils
import { humanFileSize } from 'utils';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    border: `2px dashed ${theme.palette.secondary.main}`,
    background: fade(theme.palette.secondary.main, 0.15),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(SPACING_HALF),
    overflow: 'hidden',
  },
  dragContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  fileListContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  fileContainer: {
    background: '#e1e1e1',
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    width: 185,
    margin: theme.spacing(SPACING_LEAST),
  },
  contentContainer: {
    padding: theme.spacing(SPACING_LEAST),
    width: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  textContainer: {
    background: theme.palette.common.white,
    padding: theme.spacing(SPACING_LEAST / 2, SPACING_LEAST),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(SPACING_LEAST),
    maxWidth: '100%',
    '& > *': {
      textOverflow: 'ellipsis',
    },
  },
  deleteButton: {
    borderRadius: 0,
  },
}));

/**
 * @component FileDropzone
 */
function FileDropzone({ onChange = () => {}, options, multiple }) {
  const classes = useStyles();

  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      setFiles(acceptedFiles);
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    ...options,
    multiple,
    onDrop,
  });

  const onFileDeleteClick = (file, id, event) => {
    event.stopPropagation();

    const newFiles = files.filter((_, index) => index !== id);
    setFiles(newFiles);
    onChange(newFiles);
  };

  return (
    <div {...getRootProps()} className={classes.root}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Typography variant="overline">فایل ها را اینجا رها کنید</Typography>
      ) : (
        <div className={classes.dragContainer}>
          <Typography variant="overline">
            فایل های مورد نیاز را اینجا بکشید و یا برای انتخاب کلیک کنید
          </Typography>
          <div className={classes.fileListContainer}>
            {files?.map((file, index) => (
              <div className={classes.fileContainer} key={index}>
                <div className={classes.contentContainer} dir="ltr">
                  <div className={classes.textContainer}>
                    <Typography component="p" noWrap variant="overline">
                      {humanFileSize(file.size)}
                    </Typography>
                  </div>
                  <div className={classes.textContainer}>
                    <Typography component="p" noWrap variant="overline">
                      {file.name}
                    </Typography>
                  </div>
                </div>
                <LoadingButton
                  onClick={(event) => onFileDeleteClick(file, index, event)}
                  fullWidth
                  className={classes.deleteButton}
                  variant="contained"
                  color="error.light"
                >
                  حذف فایل
                </LoadingButton>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FileDropzone;
