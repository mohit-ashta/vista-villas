import { Banner } from "@/components/organisms/home/banner";
import { Blog } from "@/components/organisms/home/blog";
import { LatestProperty } from "@/components/organisms/home/latest-property";
import { NewLaunch } from "@/components/organisms/home/new-launch";
import { PropertyList } from "@/components/organisms/home/property-list";
import { Stats } from "@/components/organisms/home/stats";
import { Layout } from "@/components/organisms/layout";
import React from "react";

export const HomeTemplate = () => {
  return (
    <Layout>
      <Banner />
      <PropertyList />
      <Blog />
      <Stats />
      <LatestProperty />
      <NewLaunch />
    </Layout>
  );
};
