import React from 'react'
import { Helmet } from 'react-helmet'

export interface Props {
  title: string
  description: string
  content: string
}

export const PageHead: React.FunctionComponent<Props> = ({
  title,
  description,
  content,
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta charSet="utf-8" name={description} content={content} />
      </Helmet>
    </div>
  )
}
