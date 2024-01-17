import { it, expect, describe } from 'vitest'
import React from '../core/React.js'

describe('createElement', () => {
  it('should return vdom for element without props', () => {
    const el = React.createElement('div', null, 'app')

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "app",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
        },
        "type": "div",
      }
    `)

    // expect(el).toEqual({
    //   type: 'div',
    //   props: {
    //     children: [{
    //       type: 'TEXT_ELEMENT',
    //       props: {
    //         nodeValue: 'app',
    //         children: []
    //       }
    //     }]
    //   }
    // })
  })

  it('should return vdom for element with props', () => {
    const el = React.createElement('div', { id: 'app' }, 'app')

    expect(el).toMatchInlineSnapshot(`
      {
        "props": {
          "children": [
            {
              "props": {
                "children": [],
                "nodeValue": "app",
              },
              "type": "TEXT_ELEMENT",
            },
          ],
          "id": "app",
        },
        "type": "div",
      }
    `)
  })
})