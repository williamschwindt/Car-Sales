const initialState = {
    car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalPrice: 0,
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const carReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FEATURE" :
            const newFeature = action.payload;
            return {
                ...state,
                car: { ...state.car, price: state.car.price + newFeature.price, features: [ ...state.car.features, newFeature ]}
            }
        case "REMOVE_FEATURE" : 
            const carFeature = action.payload;
            return {
                ...state,
                car: { ...state.car, price: state.car.price - carFeature.price, features: [ ...state.car.features.filter(feature => {
                    if (feature.id !== carFeature.id) {
                        return feature;
                    }
                })] }
            }
        default:
            return state;
    }
}