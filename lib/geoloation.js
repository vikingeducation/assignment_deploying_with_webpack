const geo = () => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position =>
          resolve([position.coords.latitude, position.coords.longitude]),
        error => reject(error)
      );
    } else {
      reject(new Error("Geolocation is not available!"));
    }
  });
};

export default geo;
