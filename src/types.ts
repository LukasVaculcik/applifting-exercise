export interface Props {
    children: React.ReactNode
}

export interface Article {
    articleId: string
    title: string
    perex: string
    imageId: string
    createdAt: string
    lastUpdatedAt: string
}

export interface ArticleInfoProps {
    author: string
    datetime: Date
}

export interface CommentProps {
    id: number
    parent_id: number
    datetime: Date
    author: string
    text: string
}

export interface NavigationLinkProps {
    link: string
    text: string
}

export interface IconProps {
    id: string
    width?: number
    height?: number
}

export interface ArticlesDataTableProps {
    data: Article[]
}

export interface ArticlesDataTableActionsProps {
    articleId: string
}

export interface ArticleFormProps {
    articleId: string | undefined
}

export interface ArticleBodyProps {
    article: Article
}

export interface ArticleCardSimpleProps {
    article: Article
}

export interface ArticleCardProps {
    article: Article
}
