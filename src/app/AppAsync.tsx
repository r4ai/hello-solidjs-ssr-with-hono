import { Component, Suspense, createResource } from "solid-js";

export const AppAsync = () => {
  const [data] = createResource(getAsyncData);
  async function getAsyncData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const json = await response.json();
    console.log(json);
    return json;
  }
  return (
    <div>
      <Suspense>
        <h1>Async SSR</h1>
        <p>{data()?.title ?? "404"}</p>
      </Suspense>
    </div>
  );
};
