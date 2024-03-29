import axios from "axios";

//const ROOT_URL = "http://localhost:8080";
const ROOT_URL = process.env.REACT_APP_API_URL;

// 소모임 생성
export const createSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups`, param);

// 소모임 조회
export const getSmallGroup = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}`);

// 소모임 회원 조회
export const getSmallGroupMembers = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}/managers-and-members`);

// 소모임 배너 사진 업데이트
export const updateSmallGroupBanner = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/banner/v2`, param.image);

// 관심사 추가
export const addInterestToSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/interest?interestName=${param.interestName}`);

// 관심사 삭제
export const removeInterestToSmallGroup = (param) => axios.delete(`${ROOT_URL}/smallGroups/${param.path}/interest?interestName=${param.interestName}`);

// 관심사 조회
export const getSmallGroupInterests = (path) => axios.get(`${ROOT_URL}/smallGroups/${path}/interests`);

// 소모임 소개 수정
export const updateSmallGroupDescription = (param) => axios.put(`${ROOT_URL}/smallGroups/${param.path}/v2`, param.formData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

// 소모임 배너 사용 여부 토글
export const toggleUseBanner = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/toggle-use-banner`);

// 소모임 검색
export const searchSmallGroup = (param) => axios.get(`${ROOT_URL}/smallGroups`, {
    params: {
        size: param.size,
        page: param.page,
        keyword: param.keyword
    }
})

// 소모임 공개
export const publishSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/publish`);


// 소모임 인원 모집 시작
export const openRecruiting = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/open-recruiting?recruitingProcess=${param.recruitingProcess}`);

// 소모임 종료
export const closeSmallGroup = (param) => axios.post(`${ROOT_URL}/smallGroups/${param.path}/close`);