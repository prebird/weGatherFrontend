import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as smallGroupsApi from '../api/smallGroupsApi';

const initialState = {
    smallGroup: {},
    smallGroupMembers: []
};

export const smallGroupSlice = createSlice({
    name: 'smallGroupSlice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(requestGetSmallGroup.fulfilled, (state, action) => {
            state.smallGroup = action.payload
        });

        builder.addCase(requestGetSmallGroupMembers.fulfilled, (state, action) => {
            state.smallGroupMembers = action.payload;
        })
    }
});

// 소모임 생성
export const requestCreateSmallGroup = createAsyncThunk('smallGroup/requestSmallGroupSlice',
    async (param) => {
        return (await smallGroupsApi.createSmallGroup(param)).data;
    });

// 소모임 조회
export const requestGetSmallGroup = createAsyncThunk('smallGroup/requestGetSmallGroup',
    async (param) => {
        return (await smallGroupsApi.getSmallGroup(param)).data;
    });

// 소모임 회원 조회
export const requestGetSmallGroupMembers = createAsyncThunk('smallGroup/requestGetSmallGroupMembers',
    async (param) => {
        return (await smallGroupsApi.getSmallGroupMembers(param)).data;
    });