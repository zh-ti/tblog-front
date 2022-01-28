import request from "../";

function getLastArticle(day = 7) {
  return request({
    url: `/home/getLastArticle/${day}`,
  });
}

export { getLastArticle };
