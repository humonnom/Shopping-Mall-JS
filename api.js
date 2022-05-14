const END_POINT =
"https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products"

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (res && res.ok) {
      return await res.json();
    }
  } catch (error) {
    alert(`서버통신 에러 (${error})/ 잠시후 다시 시도해주세요.`);
  }
};

export const getData = async (id) => {
  return fetchData(`${END_POINT}/${id ? id : ""}`);
};

export const getProductsList = async ({ setState }) => {
  const data = await getData();
  setState({ productList: data });
}

