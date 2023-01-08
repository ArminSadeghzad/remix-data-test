import { useLoaderData } from "@remix-run/react";
// import { Link } from "@remix-run/react";


export async function loader({ params }) {
  console.log(params, "id here");
  const { id } = params;

  const resp = await fetch("https://fakestoreapi.com/products/" + id);
  return {
    props: {
      product: await resp.json(),
    },
  };
}

export default function Product() {
  const data = useLoaderData();

  const latest = data?.props?.product;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>
        <h1>Product Details</h1>
        <div>{latest.id}</div>
        <div>{latest.title}</div>
      </div>
    </div>
  );
}
