
Meteor.startup(function () {
  // code to run on server at startup
  const testStream = JSON.parse(Assets.getText("teststream.json"))
  logger.info(`Test stream is ${testStream.length}`)
});
