import React from 'react'
import { mapSizesToProps } from './responsive'

it('should map club name to class name', () => {
  expect(mapSizesToProps({ width: 599 }).isMobile).toBeTruthy;
  expect(mapSizesToProps({ width: 600 }).isMobile).toBeFalsy;
})
