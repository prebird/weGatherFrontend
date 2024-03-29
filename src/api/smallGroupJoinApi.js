import axios from "axios";

const ROOT_URL = process.env.REACT_APP_API_URL;

// 소모임 가입
export const joinSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.id}/join/requests`);

// 가입 요청 조회
export const getJoinRequests = (param) => axios.get(`${ROOT_URL}/smallGroups/${param.id}/join/requests`);

// 가입 요청 승인
export const approveJoinRequests = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.id}/join/requests/${param.requestId}/approve`);

// 가입 요청 거부
export const rejectJoinRequests = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.id}/join/requests/${param.requestId}/reject`);