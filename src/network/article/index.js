import request from "../";

function getArticleList() {
  return request({
    url: "/document/getPublishedDocument",
  });
}

export { getArticleList };
