
export default function UserPage({ params }: { params: { id: string } }) {
    return <div>User ID: {params.id}</div>
}