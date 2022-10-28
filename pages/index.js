import shazamApi from "../api/shazamApi";

import Discover from "../components/Discover";

export const getServerSideProps = async () => {
  const { data } = await shazamApi.get("/charts/world");

  return {
    props: { data },
  };
};

export default function Home({ data }) {
  console.log(data);

  return (
    <>
      <Discover songs={data} />
    </>
  );
}
