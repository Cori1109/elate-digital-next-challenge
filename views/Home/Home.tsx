import { FunctionComponent, useEffect, useState } from "react";
import { FetchProfileInfo } from "hooks";
import { FetchButton } from "@components/FetchButton";
import { LoadingPlaceholder } from "@components/LoadingPlaceholder";
import { HomeContainer } from "./Home.styles";

const Home: FunctionComponent = () => {
  const [fetch, setFetch] = useState(false);
  const [data, setData] = useState<any>([]);

  const fetchHandler = async (fetch: boolean) => {
    setFetch(fetch);
    const fetchData = await FetchProfileInfo();
    setData(fetchData);
  };

  return (
    <HomeContainer>
      {!fetch ? (
        <FetchButton fetchHandle={fetchHandler} />
      ) : (
        <LoadingPlaceholder profile={data} />
      )}
    </HomeContainer>
  );
};

export default Home;
