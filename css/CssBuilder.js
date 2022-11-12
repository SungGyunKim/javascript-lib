class CssBuilder {
  classPrefix = ''
  classList = []

  constructor() {}

  static getNewInstance() {
    return new CssBuilder()
  }

  setClassPrefix(classPrefix) {
    this.classPrefix = classPrefix

    return this
  }

  addClass(item, matcher) {
    if (arguments.length === 1) {
      const classList = this._getClassList(item)

      classList.forEach((item) => {
        if (!this.classList.includes(item)) {
          this.classList.push(item)
        }
      })
    } else if (arguments.length === 2) {
      const isMatched = this._isMatched(matcher)

      if (isMatched) {
        this.addClass(item)
      }
    }

    return this
  }

  removeClass(item, matcher) {
    if (arguments.length === 1) {
      const classList = this._getClassList(item)

      classList.forEach((item) => {
        const index = this.classList.indexOf(item)

        if (index !== -1) {
          this.classList.splice(index, 1)
        }
      })
    } else if (arguments.length === 2) {
      const isMatched = this._isMatched(matcher)

      if (isMatched) {
        this.removeClass(item)
      }
    }

    return this
  }

  toggleClass(item, matcher) {
    if (arguments.length === 1) {
      const classList = this._getClassList(item)

      classList.forEach((item) => {
        const index = this.classList.indexOf(item)

        if (index === -1) {
          this.addClass(item)
        } else {
          this.classList.splice(index, 1)
        }
      })
    } else if (arguments.length === 2) {
      const isMatched = this._isMatched(matcher)

      if (isMatched) {
        this.toggleClass(item)
      }
    }

    return this
  }

  build() {
    if (this.classPrefix === '') {
      return this.classList.join(' ')
    } else {
      return this.classList.map((item) => this.classPrefix + item).join(' ')
    }
  }

  _getClassList(item) {
    const classList = []

    if (typeof item === 'string') {
      classList.push(...item.split(' '))
    } else if (Array.isArray(item)) {
      classList.push(...new Set(item.flatMap((el) => el.split(' '))))
    }

    return classList
  }

  _isMatched(matcher) {
    const matchers = []

    if (typeof matcher === 'function') {
      matchers.push(matcher)
    } else if (Array.isArray(matcher)) {
      matchers.push(...matcher)
    }

    return matchers.some((matcher) => matcher())
  }
}

export default CssBuilder
