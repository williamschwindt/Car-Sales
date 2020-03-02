export const addCarFeature = newFeature => {
    return { type: "ADD_FEATURE", payload: newFeature };
};

export const removeCarFeature = feature => {
    return { type: "REMOVE_FEATURE", payload: feature };
};