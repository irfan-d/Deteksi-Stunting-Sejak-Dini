import { ENDPOINT } from "../config";
import axios from 'axios';
import { getAccessToken } from "../utils/auth";

const ENDPOINT_PATH = {
    REGISTER: `${ENDPOINT}/register`,
    LOGIN: `${ENDPOINT}/login`,
    ARTICLES: `${ENDPOINT}/articles`,
    PREDICT: `${ENDPOINT}/predict`,
    PROFILE: `${ENDPOINT}/profile`,
    ADDRESS: `${ENDPOINT}/address`,
    CONTACT: `${ENDPOINT}/contact-us`,
    BIDAN: `${ENDPOINT}/bidan`,
    TESTIMONI: `${ENDPOINT}/testimonies`
}

export async function registerUser(formData){
    try{
        const fetch = await axios.post(ENDPOINT_PATH.REGISTER, formData)
        return fetch.data
    } catch(error){
        throw new Error(error.message);
    }
}

export async function loginUser(formData){
    try{
        const fetch = await axios.post(ENDPOINT_PATH.LOGIN, formData)
        return fetch.data
    } catch(error){
        throw new Error(error.message);
    }
}

export async function getProfile() {
  try {
    const token = getAccessToken();
    const res = await axios.get(ENDPOINT_PATH.PROFILE, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function updateProfile(profileData) {
  const token = getAccessToken();
  const res = await axios.put(ENDPOINT_PATH.PROFILE, profileData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export async function getAddress() {
  try {
    const token = getAccessToken();
    const res = await axios.get(ENDPOINT_PATH.ADDRESS, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function addAddress(addressData) {
  const token = getAccessToken();
  const res = await axios.post(ENDPOINT_PATH.ADDRESS, addressData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export async function updateAddress(addressData) {
  const token = getAccessToken();
  const res = await axios.put(ENDPOINT_PATH.ADDRESS, addressData, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
}

export async function getArticle(){
    try{
        const fetch = await axios.get(ENDPOINT_PATH.ARTICLES)
        return fetch.data
    } catch(error){
        throw new Error(error.message);
    }
}

export async function postPredict(formData){
    try{
        const token = getAccessToken()
        const fetch = await axios.post(ENDPOINT_PATH.PREDICT, formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return fetch.data;
    } catch(error){
        throw new Error(error.message);
    }
}

export async function getPredictionHistory() {
  try {
    const token = getAccessToken();
    const res = await axios.get(ENDPOINT_PATH.PREDICT, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function postContactUs({name, email, message }) {
  try {
    const token = getAccessToken();
    const res = await axios.post(ENDPOINT_PATH.CONTACT, 
      { name, email, message },
      {headers: { Authorization: `Bearer ${token}` }}
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getDaftarBidan() {
  try {
    const res = await axios.get(ENDPOINT_PATH.BIDAN)
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getDetailBidan(id) {
  try {
    const res = await axios.get(`${ENDPOINT_PATH.BIDAN}/${id}`)
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getTestimoniesByBidan(bidan_id) {
  try {
    const res = await axios.get(`${ENDPOINT_PATH.BIDAN}/${bidan_id}/testimonies`);
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
}

export async function postTestimoni({ bidan_id, content, rating }) {
  try {
    const token = getAccessToken();
    const res = await axios.post(
      ENDPOINT_PATH.TESTIMONI,
      { bidan_id, content, rating },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || error.message);
  }
}