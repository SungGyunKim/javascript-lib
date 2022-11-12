import CssBuilder from './CssBuilder.js'

console.log(
  '[addClass] 1개의 class를 string으로 추가한다. : ',
  CssBuilder.getNewInstance().addClass('on').addClass('on active').build() ===
    'on active'
)

console.log(
  '[addClass] n개의 class를 array로 추가한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .addClass(['on', 'on active'])
    .build() === 'on active'
)

console.log(
  '[addClass] 1개의 matcher에 의해 1개의 class를 추가한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on', () => true)
    .build() === 'on'
)

console.log(
  '[addClass] n개의 matcher에 의해 1개의 class를 추가한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on', [() => true, () => false])
    .build() === 'on'
)

console.log(
  '[removeClass] 기존에 추가된 class와 동일한 class를 string으로 제거한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .removeClass('on')
    .removeClass('on active')
    .build() === ''
)

console.log(
  '[removeClass] 기존의 추가된 n개의 class를 array로 제거한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .removeClass(['on', 'on active'])
    .build() === ''
)

console.log(
  '[removeClass] 1개의 matcher에 의해 1개의 class를 제거한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .removeClass('on', () => true)
    .build() === ''
)

console.log(
  '[removeClass] n개의 matcher에 의해 1개의 class를 제거한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .removeClass('on', [() => true, () => false])
    .build() === ''
)

console.log(
  '[toggleClass] 1개의 class를 토글한다.',
  CssBuilder.getNewInstance().addClass('on').toggleClass('on').build() === ''
)

console.log(
  '[toggleClass] n개의 class를 토글한다.',
  CssBuilder.getNewInstance()
    .addClass('on')
    .toggleClass(['on', 'active'])
    .build() === 'active'
)

console.log(
  '[toggleClass] 1개의 matcher에 의해 1개의 class를 토글한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .toggleClass('on', () => true)
    .build() === ''
)

console.log(
  '[toggleClass] 1개의 matcher에 의해 n개의 class를 토글한다. : ',
  CssBuilder.getNewInstance()
    .addClass('on')
    .toggleClass('on', [() => true, () => false])
    .build() === ''
)

console.log(
  '[classPrefix] build()시 모든 class에 classPrefix를 붙인다. : ',
  CssBuilder.getNewInstance()
    .setClassPrefix('v-')
    .addClass('on active')
    .build() === 'v-on v-active'
)
