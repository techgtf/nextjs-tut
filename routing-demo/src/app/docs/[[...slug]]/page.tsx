export default async function Docs(
    { params }: { params: Promise<{ slug: string[] }>; }) {

    const slug = (await params).slug;

    if (slug?.length === 2) {
        return (
            <h1>Viewing docs for : {slug[0]} and concept : {slug[1]} </h1>
        )
    }

    return (
        /* when u use [[...slug]] as we know we don't have page.tsx in side docs it's actully in [[...slug]]
          and want to handle 404 and show ui use [[]] instead of [] 
        */
        <h1>Docs home page!</h1>
    )
}