export const getNewsTicker = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/news-tickers?sort=createdAt:desc`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();
  return data.data;
};
