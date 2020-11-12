function longRunningOperation(value = 100000) {
  let i = 0;
  while(i < value) {
    i += 1
  }
}

const timeDemo = {
  runTime() {
    console.time('run')
    longRunningOperation(this.valueInput.value)
    console.timeEnd('run')
  },

  init() {
    this.valueInput = document.getElementById('time-value')
    document.getElementById('time-button').addEventListener('click', this.runTime.bind(this))
  }
}

const tableDemo = {
  people: [],

  logNames() {
    console.table(this.people.length === 1 ? this.people[0] : this.people)
  },

  addPerson() {
    const first = this.firstInput.value
    const last = this.lastInput.value
    this.firstInput.value = ''
    this.lastInput.value = ''
    this.people.push({first, last})
  },
  
  init() {
    console.log('init')
    this.valueInput = document.getElementById('time-value')
    this.firstInput = document.getElementById('first')
    this.lastInput = document.getElementById('last')
    document.getElementById('log-button').addEventListener('click', this.logNames.bind(this))
    document.getElementById('add-button').addEventListener('click', this.addPerson.bind(this))
  }
}

const groupDemo = {
  log() {
    console.group('Here are all the logs')
    console.log('This is a %s log', 'happy')
    console.warn('This is a not so %s log', 'not so happy')
    console.error('This is a %s log', 'very unhappy')
    console.groupCollapsed('Difference between dir and log when using DOM')
    console.dir(document.body)
    console.log(document.body)
    console.groupEnd()
    console.groupEnd()
  }
}

timeDemo.init()
tableDemo.init()
groupDemo.log()