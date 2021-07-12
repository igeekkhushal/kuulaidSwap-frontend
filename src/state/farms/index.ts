/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import farmsConfig from 'config/constants/farms'
import fetchFarms from './fetchFarms'
import {
  fetchFarmUserEarnings,
  fetchFarmUserAllowances,
  fetchFarmUserTokenBalances,
  fetchFarmUserStakedBalances,
} from './fetchFarmUser'
import { FarmsState, Farm } from '../types'

const initialState: FarmsState = { data: [...farmsConfig] }

export const farmsSlice = createSlice({
  name: 'Farms',
  initialState,
  reducers: {
    setFarmsPublicData: (state, action) => {
      const liveFarmsData: Farm[] = action.payload
      state.data = state.data.map((farm) => {
        const liveFarmData = liveFarmsData.find((f) => f.pid === farm.pid)
        return { ...farm, ...liveFarmData }
      })
    },
    setFarmUserData: (state, action) => {
      const { arrayOfUserDataObjects } = action.payload
      arrayOfUserDataObjects.forEach((userDataEl) => {
        const { index } = userDataEl
        state.data[index] = { ...state.data[index], userData: userDataEl }
      })
    },
  },
})

// Actions
export const { setFarmsPublicData, setFarmUserData } = farmsSlice.actions

// Thunks
export const fetchFarmsPublicDataAsync = () => async (dispatch) => {
  try {
    const farms = await fetchFarms()
    dispatch(setFarmsPublicData(farms))

  }catch(stateErr) {
    console.log(`APPROVE ERROR UPDATING FARMS STATE`, stateErr);
  }
}
export const fetchFarmUserDataAsync = (account) => async (dispatch) => {

  try {
    const userFarmAllowances = await fetchFarmUserAllowances(account)
    const userFarmTokenBalances = await fetchFarmUserTokenBalances(account)
    const userStakedBalances = await fetchFarmUserStakedBalances(account)
    const userFarmEarnings = await fetchFarmUserEarnings(account)

    const arrayOfUserDataObjects = userFarmAllowances.map((farmAllowance, index) => {
      return {
        index,
        allowance: userFarmAllowances[index],
        tokenBalance: userFarmTokenBalances[index],
        stakedBalance: userStakedBalances[index],
        earnings: userFarmEarnings[index],
      }
    })

    dispatch(setFarmUserData({ arrayOfUserDataObjects }))
  } catch(stateErr) {
    console.log(`APPROVE ERROR UPDATING FARMS STATE`, stateErr);
  }

}

export default farmsSlice.reducer
