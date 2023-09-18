import { HomeStepType } from "./types";

// If content gets unwieldy, logic should be moved outside of the return
// and into useEffect/useMemo hooks
export const HomeStep = ({ data }: { data: HomeStepType }) => {
  const { stepNumber, versionContent } = data;
  return (
    <div className="home-steps step" data-testid="homeStep">
      <span className="home-steps__number">{stepNumber.padStart(2, "0")}</span>
      <span className="home-steps__title">
        {versionContent[0]?.title || ""}
      </span>
      <p className="home-steps__body">{versionContent[0]?.body || ""}</p>
    </div>
  );
};
