export async function getHeadmasterMessage() {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/api/headmaster-messages?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  return data.data;
}
