// Time
function convertTimeStamp(timeStamp, timezone) {
    // converts time zone in hours (from seconds => hours)
    const convertTimezone = timezone / 3600
    //creates a new date object
    const date = new Date(timeStamp * 1000)
    // Options for date and time information
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        timezone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(
            convertTimezone
        )}`,// Determine the time period
        hour12: true // Display in 12 hour format
    };
    // Returns the date and time in a friendly format
    return date.toLocaleDateString("en-US", options)
}

// Converting country code to country name
function convertCountryCode(country) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" })
    console.log(regionNames.of(country))
    return regionNames.of(country)
}

/*
   *Intl.DisplayNames(): javascript is used to translate international language and region names
   *DisplayNames()
*/
export { convertTimeStamp, convertCountryCode };