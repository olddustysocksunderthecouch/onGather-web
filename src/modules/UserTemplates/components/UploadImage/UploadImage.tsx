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
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumbInner}>
        <img src={file.preview} className={styles.img} alt="uploaded" />
      </div>
    </div>
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
          marginTop: '16px',
          borderRadius: 4,
          border: '1px dashed #000',
          minHeight: '100px',
        }}
        {...getRootProps({ className: 'dropzone' })}
      >
        <input {...getInputProps()} />
        <p>
          Drag &apos;n&apos; drop an image here, or click/press to select one
        </p>
        <aside className={styles.thumbsContainer}>{thumbs}</aside>
      </div>
    </section>
  )
}
