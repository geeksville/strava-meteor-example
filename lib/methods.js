
/**
 * Return resting heart rate for this ride (or null if it can not be determined)
 */
getResting = (stream) => {
  return ('heartrate' in stream) ? stream.heartrate.data[0] : null
}

Meteor.methods({
  testStrava: () => {
    const strava = new StravaClient(Meteor.user().services.strava.accessToken)
    let activities = strava.getActivitiesIds()
    logger.info(`activities are ${activities}`)

    // HACK for testing REMOVE
    //activities = activities.slice(3, 5)

    const streams = activities.map(a =>strava.getStreams(a, 'heartrate'))

    const resting = streams.map(s => getResting(s))
    logger.info(`resting heartrates are ${resting}`)
  }

})
