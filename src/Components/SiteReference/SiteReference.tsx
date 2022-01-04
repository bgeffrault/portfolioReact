import { FC } from "react"

type ISiteReference = {
    url: string,
    content: string | JSX.Element,
}

const SiteReference: FC<ISiteReference> = ({ content, url }) => (<a href={url} target="_blank" rel="noopener noreferrer">{content}</a>)

export default SiteReference;