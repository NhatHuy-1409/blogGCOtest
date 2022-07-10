export async function getPathCategories() {
  return fetch(`https://api.gcosoftware.vn/wp-json/wp/v2/categories`).then(
    (res) => res.json()
  );
}

export async function getCategoriesData() {
  const categoriesList = await getPathCategories();
  console.log(categoriesList);
  return {
    categoriesList,
  };
}

export async function getPathPosts() {
  return fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?search=web&per_page=5&page=1`
  ).then((res) => res.json());
}

export async function getPostsData() {
  const postsList = await getPathPosts();

  console.log(postsList);

  return {
    postsList,
  };
}
export async function getPathDetailPosts(id:any) {
  return fetch(
    `https://api.gcosoftware.vn/wp-json/wp/v2/posts?slug=${id}`
  ).then((res) => res.json());
}

export async function getDetailPostsData(id:any) {
  const detailPost = await getPathDetailPosts(id);
console.log('kk');

  console.log(detailPost);
  return {
    detailPost,
  };
}
