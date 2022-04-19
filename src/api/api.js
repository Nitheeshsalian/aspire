//mock api function
export async function getLimit(payload) {
    const url = "http://mockbin.com/request?foo=bar&foo=baz"
    console.log(url)
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                "cookie": "foo=bar; bar=baz",
                "x-pretty-print": "2"
            },
            body: {
                "foo": "bar"
            }
        })

        return {
            status: response.ok,
            data: await response.json()
        }
    } catch (e) {
        console.error(e)
        throw e
    }
}