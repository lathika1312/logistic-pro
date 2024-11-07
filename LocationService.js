// Initialize pickup and drop locations
let pickupLocation = null;
let dropLocation = null;

// Get pickup location name
function getPickupLocationName() {
  return pickupLocation ? pickupLocation.name : null;
}

// Get drop location name
function getDropLocationName() {
  return dropLocation ? dropLocation.name : null;
}

// Set pickup location with latitude, longitude, and name
function setPickupLocation(lat, lon, name) {
  pickupLocation = { lat, lon, name };
}

// Set drop location with latitude, longitude, and name
function setDropLocation(lat, lon, name) {
  dropLocation = { lat, lon, name };
}

// Get pickup location details
function getPickupLocation() {
  return pickupLocation;
}

// Get drop location details
function getDropLocation() {
  return dropLocation;
}

// Haversine formula to calculate distance between two points
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
}

// Calculate distance between pickup and drop locations
function calculateDistance() {
  if (pickupLocation && dropLocation) {
    const distance = haversineDistance(
      pickupLocation.lat,
      pickupLocation.lon,
      dropLocation.lat,
      dropLocation.lon
    );
    return Promise.resolve(parseFloat(distance.toFixed(2))); // Return the distance in km, rounded to two decimal places
  } else {
    return Promise.resolve(0); // Return 0 if locations are not set
  }
}

// Calculate fare based on the distance (₹200 per km)
function calculateFare() {
  return calculateDistance().then(distance => {
    return parseFloat((distance * 200).toFixed(2)); // Fare rounded to two decimal places
  });
}
