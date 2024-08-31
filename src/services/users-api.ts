export async function getUsers() {
  const response = await fetch(
    "https://66d1d18d62816af9a4f4f857.mockapi.io/api/v1/users"
  );

  const data = response.json();
  return data;
}
