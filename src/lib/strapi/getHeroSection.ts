export const getHeroSection = async () => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}/api/hero-sections?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    }
  );
  const data = await response.json();
  return data.data[0];
};
