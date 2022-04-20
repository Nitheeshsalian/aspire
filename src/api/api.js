//mock api function
export async function getLimit(payload) {
  const url = 'https://jsonplaceholder.typicode.com/posts/' + payload;
  console.log(url);
  try {
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        cookie: 'foo=bar; bar=baz',
        'x-pretty-print': '2',
      },
    });

    return {
      status: response.ok,
      data: await response.json(),
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
