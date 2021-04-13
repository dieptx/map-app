const defaultRequestUrl = "https://raw.githubusercontent.com/oTranXuanDiep/map-app/master/valid-response.json";

const fetchMarkersByUrl = async (url?: string): Promise<any> => {
  const requestUrl = url === undefined || url.length === 0 ? defaultRequestUrl : url;
  const response = await fetch(requestUrl, {
    cache: "no-cache",
  });
  return response.json();
};

export { fetchMarkersByUrl, defaultRequestUrl };
