import { HomeStepType, HomeStepsType } from "./types";

/**
 * Use this to parse Home Steps data from API
 * @param data List of Home Steps
 * @returns Sorted list of Home Steps with latest content
 */
export const parseHomeSteps = (data: HomeStepsType): HomeStepsType | [] => {
  if (data && data.length > 0) {
    return removeOutdatedHomeStepContent(
      data.sort((a, b) => Number(a.stepNumber) - Number(b.stepNumber))
    );
  }

  // Return empty array as fallback
  return [];
};

/**
 * Use this to remove old Home Steps version content
 * @param data List of Home Steps
 * @returns Home Steps with filtered latest version content
 */
const removeOutdatedHomeStepContent = (
  data: HomeStepsType
): HomeStepsType | [] => {
  // If data is defined and not an empty array
  if (data && data.length > 0) {
    data.forEach((step: HomeStepType, index) => {
      // If more than 1 step content exists
      if (step?.versionContent?.length > 1) {
        let mxDate = step.versionContent.reduce((a, b) => {
          return a.effectiveDate > b.effectiveDate ? a : b;
        });
        // Reduce version content to 1 item and keep it an array so FE/BE types don't diverge unnecessarily
        data[index] = {
          ...data[index],
          versionContent: [mxDate],
        };
      }
    });

    // Return cleaned up array
    return data;
  }

  // Return empty array as fallback
  return [];
};
