const breakpointDemo = {
  calculate() {
    this.inputResult.value = parseInt(this.inputValue.value, 10) + 10
    this.inputResult.classList.add('updated')
  },

  init() {
    this.inputValue = document.getElementById('input-value')
    this.inputResult = document.getElementById('result-value')
    
    document.querySelector('button').addEventListener('click', this.calculate.bind(this))

    this.inputResult.addEventListener('transitionend', function(type){
      if(this.classList.contains('updated')) {
        this.classList.remove('updated')
      }
    })
  }
}

breakpointDemo.init()