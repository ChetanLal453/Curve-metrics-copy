import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import HomeThreeFeatures from "@/components/containers/features/HomeThreeFeatures";
import ServiceBoost from "@/components/containers/boost/ServiceBoost";
import ServiceCta from "@/components/containers/cta/ServiceCta";

const Gaming = () => {
  return (
    <Layout header={5} footer={5}>
      <Banner title="Gaming" />
      <HomeThreeFeatures />
      <ServiceBoost />
      <ServiceCta />
    </Layout>
  );
};

export default Gaming;
