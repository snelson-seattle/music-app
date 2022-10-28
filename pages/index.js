import shazamApi from "../api/shazamApi";

export const getServerSideProps = async () => {
  const { data } = await shazamApi.get("/charts/world");

  return {
    props: { data },
  };
};

export default function Home({data}) {
  console.log(data);
  

  return <div>App goes here.</div>;
}
