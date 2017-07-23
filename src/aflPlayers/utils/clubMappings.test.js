import React from 'react'
import getClassName from './clubMappings'

it('should map club name to class name', () => {
  expect(getClassName('Geelong Cats')).toEqual('geelong-cats');
})

it('should return empty if not matching', () => {
  expect(getClassName('Geelong')).toEqual('');
})