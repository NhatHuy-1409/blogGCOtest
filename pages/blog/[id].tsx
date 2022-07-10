import { GetStaticProps } from "next";
import * as React from "react";
import { MainLayout } from "../../components/layout";
import { getDetailPostsData, getPostsData } from "../../utils/get-data";

interface Props {
  detailData: {detailPost:any};
}

export default function BlogDetailPage({ detailData }: Props) {
  // console.log(detailData.detailPost);
  var parse = require("html-react-parser");
  parse(`${detailData.detailPost[0].content.rendered}`);
  return (
    <div className="container m-auto px-3 md:px-48 mt-11">
      <h2 className="text-6xl font-medium	text-gray-800 mb-4">
        {detailData.detailPost[0].title.rendered}
      </h2>
      <div>{parse(`${detailData.detailPost[0].content.rendered}`)}</div>
    </div>
  );
}
BlogDetailPage.Layout = MainLayout;
export const getStaticProps: GetStaticProps = async () => {

  const detailData = await getDetailPostsData(`thiet-ke-website-ngap-tran-uu-dai-trong-thang-7`);
  // Pass data to the page via props
  return { props: { detailData } };
};

export async function getStaticPaths() {
  const data = await getDetailPostsData("thiet-ke-website-ngap-tran-uu-dai-trong-thang-7");

  return {
    paths: [
      { params: { id: "thiet-ke-website-ngap-tran-uu-dai-trong-thang-7" } },
    ],
    fallback: true,
  };
}
