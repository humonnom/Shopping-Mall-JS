const END_POINT = "";

const fetchData = async (url) => {
  const res = await fetch(url);
  if (res.ok) {
    return await res.json();
  }
};

export const getData = async (keyword) => {
  return fetchData(`${END_POINT}/languages?keyword=${keyword}`);
};
