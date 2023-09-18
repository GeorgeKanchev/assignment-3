import { useEffect, useState } from "react";
import "./styles.css";
import { parseHomeSteps } from "./helpers";
import { HomeStepType, HomeStepsType } from "./types";
import { HomeStep } from "./HomeStep";
import { Container } from "../../layout/Container";
import { Loading } from "../common/loading/Loading";

export const HomeSteps = () => {
  const [data, setData] = useState<HomeStepsType>();
  const [loading, setLoading] = useState<boolean>(true); // loading spinner shows up
  useEffect(() => {
    const API_HOST =
      process.env.REACT_APP_API ||
      "https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/";

    // fetch data
    const dataFetch = async () => {
      const data: HomeStepsType = await (
        await fetch(`${API_HOST}FrontEndCodeChallenge`)
      ).json();

      // set state when data is received and clean/sort it
      setData(parseHomeSteps(data));
      setLoading(false); // remove loading spinner
    };

    dataFetch();
  }, []);

  return (
    <Container>
      <div id="home-steps">
        <h2>How It Works</h2>
        <div className="home-steps home-steps-container">
          {loading ? (
            <Loading />
          ) : (
            data?.map((step: HomeStepType) => {
              return <HomeStep data={step} key={step.id} />;
            }) || "No data"
          )}
        </div>
      </div>
    </Container>
  );
};
