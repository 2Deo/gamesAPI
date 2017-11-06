import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import RecipeItem from './RecipeItem'
import recipes from '../../fixtures/recipes'
import SEED_RECIPES from '../recipes/recipes'

describe('actions', () => {
  it('should create an action to add recipes ', () => {
    const reducer = recipes
    const SEED_RECIPES = 'SEED_RECIPES'
    const expectedAction = {
      type: SEED_RECIPES,

    }
    expect(actions.SEED_RECIPES).to.include(SEED_RECIPES)
  })
})
