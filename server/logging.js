var consoleOptions = {
    colorize: true,
    level: 'debug',
    levels : {debug: 0, info : 1, warn: 2, error: 3},
    colors : {debug: 'blue', info : 'green', warn: 'orange', error: 'red'},
    handleExeptions: true,
    humanReadableUnhandledException: true,
}

// Add & configure the console transport
logger.addTransport('console', consoleOptions)
