async function query({ query, variables }) {
  const data = await fetch("https://gql.hashnode.com", {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((r) => r.json());
  return data;
}

module.exports = { query }