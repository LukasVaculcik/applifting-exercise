import DataTable from "react-data-table-component"
import { ArticlesDataTableProps } from "../types"
import ArticlesDataTableActions from "./ArticlesDataTableActions"

const columns = [
    {
        name: "Article title",
        selector: (row: any) => row.title,
        sortable: true,
    },
    {
        name: "Perex",
        selector: (row: any) => row.perex,
        sortable: true,
    },
    {
        name: "Author",
        selector: (row: any) => row.author,
        sortable: true,
    },
    {
        name: "# of comments",
        selector: (row: any) => row.commentsCount,
        sortable: true,
    },
    {
        name: "Actions",
        cell: (row: any) => (
            <ArticlesDataTableActions articleId={row.articleId} />
        ),
    },
]

export default function ArticlesDataTable({ data }: ArticlesDataTableProps) {
    return <DataTable columns={columns} data={data} />
}
