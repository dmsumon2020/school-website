export async function getHeadmasterMessage() {
  const res = await fetch(
    "https://effortless-fireworks-ed642ae948.strapiapp.com/api/headmaster-messages?populate=*",
    {
      headers: {
        Authorization: `Bearer 9cf5a1278ae659cb9e9b67c922f389e2103751614f86e4c72f905d631f2849983fcb9ad649fdb2382080d85f7617c024c711173bdcea458bea84235767819e0e4c1bd51efafa2125601ea51b8132902a0231cff7d3ebebe3bbd9cbefc485626b9842515ec1a72ff7a9fd00b89cd49d4d4d36352d3a9ffa1b409bc89289c48f32`, // optional if public
      },
      next: { revalidate: 60 }, // ISR: optional
    }
  );

  const data = await res.json();
  return data.data;
}
