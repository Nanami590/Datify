export const getLocation = (
  successCallback: (location: GeolocationPosition) => void,
  errorCallback: () => void,
) => {
  if (navigator?.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
};
