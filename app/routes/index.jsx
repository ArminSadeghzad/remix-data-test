import styles from "~/styles/home.css";

import { Link, useLoaderData } from "@remix-run/react";



export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  const resp = await fetch("https://fakestoreapi.com/products");
  return {
    props: {
      product: await resp.json(),
    },
  };
}

export default function Index() {
  const data = useLoaderData();

  const latest = data?.props?.product;
  // const moreLatest = [...latest, ...latest, ...latest, ...latest];

  return (
    <div>
      <div>
        <h1>Product List</h1>
        {/* {latest.length} length */}
        <div>
          {latest.map((latest) => (
            <div key={latest.id}>
              <Link to={`/product/${latest.id}`}>
                {latest.id}*{latest.price}*{latest.title}
                <img src={latest.image} alt={latest.id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
