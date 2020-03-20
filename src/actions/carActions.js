export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (featureName) => {
  return { type: ADD_FEATURE, 
           payload: featureName
    };
};

export const removeFeature = (featureName) => {
    return { type: REMOVE_FEATURE, 
             payload: featureName
      };
  };
