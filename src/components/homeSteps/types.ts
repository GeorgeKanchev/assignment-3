export type HomeStepsType = HomeStepType[];

export type HomeStepType = {
  id: string;
  stepNumber: string;
  versionContent: HomeStepVersionContent[];
};

export type HomeStepVersionContent = {
  body: string;
  effectiveDate: string;
  title: string;
};
