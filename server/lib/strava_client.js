

StravaClient = class StravaClient {
  constructor(accessToken) {
    this.token = accessToken
    this.baseUrl = "https://www.strava.com/api/v3/"
  }

  doGet(path, params = {}) {
    const headers = { Authorization: `Bearer ${this.token}`}
    const options = { headers, params }
    const res = Meteor.http.get(this.baseUrl + path, options)
    logger.debug(`Get of ${path} (${params}) yields ${res.statusCode}`)
    //for(let k in res.headers) logger.debug(`response header: ${k} = ${res.headers[k]}`)
    return res.data;
  }

  /**
   * Return a list of activity objects
   */
  getActivitiesPage(pageNum) {

    // logger.debug("got: " + res.map(activity => activity.id))
    return res
  }

  /**
   * Return a list of activity objects
   */
  getActivities() {
    let res = []
    const perPage = 100

    for(let pageNum = 1; pageNum < 100; pageNum++) {
      const params = { per_page: perPage, page: pageNum }

      //logger.info('Get page ' + pageNum)
      const pres = this.doGet("activities", params)

      // Strava seems to use an empty result to indicate end of pages
      if(pres.length < perPage)
        break
      else
        res = res.concat(pres)
    }
    return res
  }

  /**
   * Return a list of activity ids
   */
  getActivitiesIds() {
    return this.getActivities().map(activity => activity.id)
  }

  getActivity(activityId) {

  }

  getStreams(activityId, streamType) {
    let asarray = this.doGet(`activities/${activityId}/streams/${streamType}`)

    // The strava servers returns this as an array of datatypes, but
    // it is more useful to be a map
    const m = {}
    for(let s of asarray) m[s.type] = s

    return m
  }
}
