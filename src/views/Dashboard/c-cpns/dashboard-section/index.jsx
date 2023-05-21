import PropTypes from "prop-types";
import React, { memo } from "react";
import { DashboardSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionContent from "@/components/section-content";
import SectionFooter from "@/components/section-footer";

const DashboardSction = memo(props => {
  const { dataInfo } = props;
  return (
    <DashboardSectionWrapper>
      <SectionHeader title={dataInfo?.title} subTitle={dataInfo?.subtitle}/>
      <SectionContent roomList={dataInfo?.list} />
      <SectionFooter />
    </DashboardSectionWrapper>
  );
});

DashboardSction.propTypes = {
  dataInfo: PropTypes.object
};

export default DashboardSction;
