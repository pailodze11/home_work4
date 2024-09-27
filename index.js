// First iterate over the cities (Tbilisi and Batumi).
// Then iterate over each property's details within each city,
// logging all nested properties such as temperature, humidity,
//  wind, forecast, and airQuality.

const keys = Object.keys(weatherData);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(key);
}

for (const weather of Object.keys(weatherData.Tbilisi)) {
  console.log(weather);
}

// ------------------------------------------------------------------------

// Modify one data point:
// Change the current temperature for Tbilisi to
// a new value (e.g., 27) using dot notation.
// Log the updated weatherData object to see the change.

weatherData.Tbilisi.temperature.current = 27;
weatherData["Tbilisi"]["temperature"]["current"] = 27;
console.log(weatherData.Tbilisi.temperature.current);

// ------------------------------------------------------------------------

// Add a new property called pollutionLevel with any value of
// your choice using either dot notation or bracket notation.
// For example, set pollutionLevel to "Moderate" for Tbilisi
// and "High" for Batumi. Display the updated weather information
// for both cities using the for loop again, ensuring all the added
// and modified properties are correctly displayed.

weatherData.Tbilisi.pollutionLevel = "Moderate";
weatherData["Tbilisi"]["pollutionLevel"] = "Moderate";

for (const pollution of Object.keys(weatherData.Tbilisi)) {
  console.log(pollution);
}

const tbilisiKey = Object.keys(weatherData.Tbilisi);
for (let i = 0; i < tbilisiKey.length; i++) {
  const key = tbilisiKey[i];
  console.log(key);
}

weatherData.Batumi.pollutionLevel = "High";
weatherData["Batumi"]["pollutionLevel"] = "High";

for (const pollution of Object.keys(weatherData.Batumi)) {
  console.log(`batumi`, pollution);
}

const batumiKey = Object.keys(weatherData.Batumi);
for (let i = 0; i < batumiKey.length; i++) {
  const key = batumiKey[i];
  console.log(key);
}

// ------------------------------------------------------------------------

// Console log two specific nested data values:

console.log(weatherData.Batumi.temperature.high);
console.log(weatherData["Batumi"]["temperature"]["high"]);

console.log(weatherData.Tbilisi.forecast.evening.conditions);
console.log(weatherData["Tbilisi"]["forecast"]["evening"]["conditions"]);
