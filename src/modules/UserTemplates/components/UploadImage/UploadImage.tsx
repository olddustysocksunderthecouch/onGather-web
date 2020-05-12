import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styles from './UploadImage.module.scss'

export interface Props {
  handleImageSelected: (url: File) => void
}

export const UploadImage: React.FunctionComponent<Props> = ({
  handleImageSelected,
}) => {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ) as any,
      )
      const mostRecentImage = acceptedFiles[acceptedFiles.length - 1]
      handleImageSelected(mostRecentImage)
    },
  })

  const thumbs = files.map((file: any) => (
    <img
      src={file.preview}
      className={styles.img}
      alt="uploaded"
      key={file.name}
    />
  ))

  useEffect(
    () => (): void => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file: any) => URL.revokeObjectURL(file.preview))
    },
    [files],
  )

  return (
    <section className={styles.container}>
      <div
        style={{
          height: '240px',
        }}
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        {files.length < 1 ? (
          <p>
            Drag &apos;n&apos; drop an image here, or click/press to select one
          </p>
        ) : (
          <aside className={styles.thumbsContainer}>
            {thumbs}
            <button>Change Image</button>
          </aside>
        )}
      </div>
    </section>
  )
}
