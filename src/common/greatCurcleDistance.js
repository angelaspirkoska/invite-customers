const EARTH_RADIUS = 6371;

/**
 * returns  greate circle distance between to points (points must have valid values for latitude and longitude)
 * @param {object} pointOne first point with parameter latitude and parameter longitude in degrees
 * @param {object} pointTwo second point with parameter latitude and parameter longitude in degrees
 */
export function calcalculateGreatCircleDistance(pointOne, pointTwo) {
  //calulate longitude and latitude in radians for first point
  pointOne.longitudeRadians = calculateRadians(pointOne.longitude);
  pointOne.latitudeRadians = calculateRadians(pointOne.latitude);

  //calulate longitude and latitude in radians for second point
  pointTwo.longitudeRadians = calculateRadians(pointTwo.longitude);
  pointTwo.latitudeRadians = calculateRadians(pointTwo.latitude);

  let centralAngle = calculateCentralAngle(pointOne, pointTwo);

  //return caclulated distance between first and second point
  return calculateDistance(centralAngle);
}
/**
 * returns true if the point is in the range (latitude range values -90.0 to 90.0 and longitude range values -180.0 to 180.0)
 * @param {object} point point with parameter latitude and parameter longitude in degrees
 */
export function validatePoint(point) {
  let isValid = true;

  if (point.latitude < -90.0 || point.latitude > 90.0) {
    isValid = false;
  }

  if (point.longitude < -180.0 || point.longitude > 180.0) {
    isValid = false;
  }

  return isValid;
}
/**
 * returns radians calulated from the degree
 * @param {decimal} degree degrees that will be converted to radians
 */
function calculateRadians(degree) {
  return degree * (Math.PI / 180);
}
/**
 * returns calculated central angle in radians
 * @param {object} pointOne first point with parameter latitude and parameter longitude in radians
 * @param {object} pointTwo second point with parameter latitude and parameter longitude in radians
 */
function calculateCentralAngle(pointOne, pointTwo) {
  //calculate longitudes difference between the two points
  let longitudesDifference =
    pointOne.longitudeRadians > pointTwo.longitudeRadians
      ? pointOne.longitudeRadians - pointTwo.longitudeRadians
      : pointTwo.longitudeRadians - pointOne.longitudeRadians;

  //calculate central angle based on the formula great curcle distance
  let centralAngle = Math.acos(
    Math.sin(pointOne.latitudeRadians) * Math.sin(pointTwo.latitudeRadians) +
      Math.cos(pointOne.latitudeRadians) * Math.cos(pointTwo.latitudeRadians) * Math.cos(longitudesDifference)
  );

  return centralAngle;
}
/**
 * returns distance between two points
 * @param {decimal} centralAngle central angle calulated in previous steps with value in radians
 */
function calculateDistance(centralAngle) {
  return EARTH_RADIUS * centralAngle;
}
